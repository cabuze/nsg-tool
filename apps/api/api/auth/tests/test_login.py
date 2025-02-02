"""Module api.auth.tests.login."""

import json
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
from ninja_extended.errors import CSRFError

from api.auth.errors import InvalidCredentialsError
from api.auth.schemas import LoginRequest, LoginResponse
from api.domain.users.model import User


@pytest.fixture
def path() -> str:
    """Fixture for path."""

    return "/api/auth/login"


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "login"


def test_login_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test login request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = get_full_arg_spec(operation.view_func)

    assert handler_specs.args == ["request", "data"]
    assert handler_specs.annotations == {"request": HttpRequest, "data": LoginRequest}


def test_login_response_schemas(router: ExtendedRouter, operation_id: str):
    """Test login response schemas."""

    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=(200, LoginResponse),
    )
    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=InvalidCredentialsError,
    )
    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=CSRFError,
    )


def test_login_csrf_error(csrf_test_client: Client, path: str, operation_id: str):
    """Test login CSRFError."""

    response = csrf_test_client.post(
        path=path,
        data=json.dumps({"email": "email", "password": "password"}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.FORBIDDEN
    assert response.json() == {
        "type": "errors/csrf",
        "status": HTTPStatus.FORBIDDEN,
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_login_no_user(test_client: Client, path: str, operation_id: str):
    """Test login no user."""

    response = test_client.post(
        path=path,
        data=json.dumps({"email": "email", "password": "password"}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/invalid-credentials",
        "status": HTTPStatus.UNAUTHORIZED,
        "message": "Invalid credentials",
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_login_wrong_password(test_client: Client, path: str, operation_id: str, user: User):
    """Test login wrong password."""

    response = test_client.post(
        path=path,
        data=json.dumps({"email": user.email, "password": "password2"}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/invalid-credentials",
        "status": HTTPStatus.UNAUTHORIZED,
        "message": "Invalid credentials",
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_login_user_inactive(test_client: Client, path: str, operation_id: str, user_inactive: User):
    """Test login user inactive."""

    response = test_client.post(
        path=path,
        data=json.dumps({"email": user_inactive.email, "password": "password"}),
        content_type="application/json",
    )

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/invalid-credentials",
        "status": HTTPStatus.UNAUTHORIZED,
        "message": "Invalid credentials",
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_login(test_client: Client, path: str, user: User):
    """Test login."""

    response = test_client.post(
        path=path,
        data=json.dumps({"email": user.email, "password": "password"}),
        content_type="application/json",
    )

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
    assert "csrftoken" in response.cookies
