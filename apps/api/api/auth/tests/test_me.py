"""Module api.auth.tests.login."""

from http import HTTPStatus

import pytest
from django.http import HttpRequest
from django.test import Client
from ninja_extended.api import ExtendedRouter
from ninja_extended.api.utils import (
    get_full_arg_spec,
    get_operation_from_router_by_operation_id,
    is_response_registered_in_operation,
)
from ninja_extended.errors import AuthenticationError, AuthorizationError

from api.auth.api import auth_router
from api.auth.schemas import MeResponse
from api.domain.users.model import User


@pytest.fixture
def path() -> str:
    """Fixture for path."""

    return "/api/auth/me"


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "me"


def test_me_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test me request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = get_full_arg_spec(operation.view_func)

    assert handler_specs.args == ["request"]
    assert handler_specs.annotations == {"request": HttpRequest}


def test_me_response_schemas(router: ExtendedRouter, operation_id: str):
    """Test me response schemas."""

    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=(200, MeResponse),
    )
    assert is_response_registered_in_operation(
        api_or_router=auth_router,
        operation_id=operation_id,
        response=AuthenticationError,
    )
    assert is_response_registered_in_operation(
        api_or_router=auth_router,
        operation_id=operation_id,
        response=AuthorizationError,
    )


def test_me_authentication_error(test_client: Client, path: str, operation_id: str):
    """Test me AuthenticationError."""

    response = test_client.get(path=path)

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/authentication",
        "status": HTTPStatus.UNAUTHORIZED,
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_me(test_client: Client, path: str, user: User):
    """Test me."""

    test_client.login(username=user.email, password="password")  # noqa: S106

    response = test_client.get(path=path)

    response_data = response.json()
    assert len(response_data) == 9  # noqa: PLR2004

    assert response.status_code == HTTPStatus.OK
    assert response_data["id"] == user.id
    assert response_data["display_name"] == user.display_name
    assert response_data["email"] == user.email
    assert response_data["is_active"] == user.is_active
    assert response_data["is_staff"] == user.is_staff
    assert response_data["is_superuser"] == user.is_superuser
    assert response_data["created_at"] == user.created_at.isoformat()
    assert response_data["updated_at"] == user.updated_at.isoformat()
    # last_login is not tested
