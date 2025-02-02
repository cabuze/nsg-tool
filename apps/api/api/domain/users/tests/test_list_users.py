"""Module api.domain.users.test.test_list_users."""

from http import HTTPStatus
from unittest.mock import ANY
from urllib.parse import urlencode

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

from api.domain.users.model import User
from api.domain.users.schemas import UserFitlerSchema, UserResponse, UserSortSchema


@pytest.fixture
def path() -> str:
    """Fixture for path."""

    return "/api/users"


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "listUsers"


def test_list_users_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test list users request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = get_full_arg_spec(operation.view_func)

    assert handler_specs.args == ["request", "filters", "sort"]
    assert handler_specs.annotations == {"request": HttpRequest, "filters": UserFitlerSchema, "sort": UserSortSchema}


def test_list_users_response_schemas(router: ExtendedRouter, operation_id: str):
    """Test list users response schemas."""

    assert is_response_registered_in_operation(
        api_or_router=router,
        operation_id=operation_id,
        response=(200, list[UserResponse]),
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


def test_list_users_authentication_error(test_client: Client, path: str, operation_id: str):
    """Test list users AuthenticationError."""

    response = test_client.get(path=path)

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {
        "type": "errors/authentication",
        "status": HTTPStatus.UNAUTHORIZED,
        "path": path,
        "operation_id": operation_id,
    }


@pytest.mark.django_db
def test_list_users(test_client: Client, path: str, users: list[User]):
    """Test list users."""

    test_client.login(username=users[0].email, password="password")  # noqa: S106

    response = test_client.get(path=path)

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "count": 10,
        "current_page": 1,
        "pages": 1,
        "previous_page": None,
        "next_page": None,
        "previous_url": None,
        "next_url": None,
        "items": [
            {
                "id": user.id,
                "display_name": user.display_name,
                "email": user.email,
                "is_active": user.is_active,
                "is_staff": user.is_staff,
                "is_superuser": user.is_superuser,
                "last_login": ANY,
                "created_at": user.created_at.isoformat(),
                "updated_at": user.updated_at.isoformat(),
            }
            for user in users
        ],
    }


@pytest.mark.django_db
def test_list_users_page_size_4(test_client: Client, path: str, users: list[User]):
    """Test list users."""

    test_client.login(username=users[0].email, password="password")  # noqa: S106

    query_params = {
        "ordering": "display_name_asc",
        "page_size": 4,
        "page": 1,
    }
    response = test_client.get(path=f"{path}?{urlencode(query=query_params)}")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "count": 10,
        "current_page": 1,
        "pages": 3,
        "previous_page": None,
        "next_page": 2,
        "previous_url": None,
        "next_url": "http://testserver/api/users?ordering=display_name_asc&page_size=4&page=2",
        "items": [
            {
                "id": user.id,
                "display_name": user.display_name,
                "email": user.email,
                "is_active": user.is_active,
                "is_staff": user.is_staff,
                "is_superuser": user.is_superuser,
                "last_login": ANY,
                "created_at": user.created_at.isoformat(),
                "updated_at": user.updated_at.isoformat(),
            }
            for user in sorted(users, key=lambda user: user.display_name)[:4]
        ],
    }

    query_params = {
        "ordering": "display_name_asc",
        "page_size": 4,
        "page": 2,
    }
    response = test_client.get(path=f"{path}?{urlencode(query=query_params)}")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "count": 10,
        "current_page": 2,
        "pages": 3,
        "previous_page": 1,
        "next_page": 3,
        "previous_url": "http://testserver/api/users?ordering=display_name_asc&page_size=4&page=1",
        "next_url": "http://testserver/api/users?ordering=display_name_asc&page_size=4&page=3",
        "items": [
            {
                "id": user.id,
                "display_name": user.display_name,
                "email": user.email,
                "is_active": user.is_active,
                "is_staff": user.is_staff,
                "is_superuser": user.is_superuser,
                "last_login": ANY,
                "created_at": user.created_at.isoformat(),
                "updated_at": user.updated_at.isoformat(),
            }
            for user in sorted(users, key=lambda user: user.display_name)[4:8]
        ],
    }

    query_params = {
        "ordering": "display_name_asc",
        "page_size": 4,
        "page": 3,
    }
    response = test_client.get(path=f"{path}?{urlencode(query=query_params)}")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "count": 10,
        "current_page": 3,
        "pages": 3,
        "previous_page": 2,
        "next_page": None,
        "previous_url": "http://testserver/api/users?ordering=display_name_asc&page_size=4&page=2",
        "next_url": None,
        "items": [
            {
                "id": user.id,
                "display_name": user.display_name,
                "email": user.email,
                "is_active": user.is_active,
                "is_staff": user.is_staff,
                "is_superuser": user.is_superuser,
                "last_login": ANY,
                "created_at": user.created_at.isoformat(),
                "updated_at": user.updated_at.isoformat(),
            }
            for user in sorted(users, key=lambda user: user.display_name)[8:]
        ],
    }
