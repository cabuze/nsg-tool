"""Module api.auth.tests.logout."""

import json
from http import HTTPStatus
from inspect import getfullargspec

import pytest
from django.http import HttpRequest
from django.test import Client
from ninja_extended.api import ExtendedRouter
from ninja_extended.api.utils import get_operation_from_router_by_operation_id, is_response_registered_in_operation
from ninja_extended.errors import AuthenticationError, AuthorizationError, CSRFError

from api.auth.schemas import LogoutResponseSchema
from api.domain.users.model import User


@pytest.fixture
def path() -> str:
    """Fixture for path."""

    return "/api/auth/logout"


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "logout"


def test_logout_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test logout request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = getfullargspec(operation.view_func)

    assert handler_specs.args == ["request"]
    assert handler_specs.annotations == {"request": HttpRequest}


def test_logout_response_schemas(router: ExtendedRouter, operation_id: str):
    """Test logout response schemas."""

    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=(200, LogoutResponseSchema),
    )
    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=AuthenticationError,
    )
    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=AuthorizationError,
    )
    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=CSRFError,
    )


def test_logout_csrf_error(csrf_test_client: Client, path: str, operation_id: str):
    """Test logout CSRFError."""

    response = csrf_test_client.post(
        path=path,
        data=json.dumps({}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.FORBIDDEN
    assert response.json() == {
        "type": "errors/csrf",
        "status": HTTPStatus.FORBIDDEN,
        "path": path,
        "operation_id": operation_id,
    }


def test_logout_authentication_error(test_client: Client, path: str, operation_id: str):
    """Test logout AuthenticationError."""

    response = test_client.post(
        path=path,
        data=json.dumps({}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/authentication",
        "status": HTTPStatus.UNAUTHORIZED,
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_logout(test_client: Client, path: str, user: User):
    """Test logout."""

    test_client.login(username=user.email, password="password")  # noqa: S106

    response = test_client.post(path=path)

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {"message": "Logout successful"}
    assert "csrftoken" not in response.cookies
