"""Module api.domain.users.test.test_list_users."""

from inspect import getfullargspec

import pytest
from django.http import HttpRequest
from ninja_extended.api import ExtendedRouter
from ninja_extended.api.utils import get_operation_from_router_by_operation_id, is_response_registered_in_operation
from ninja_extended.errors import AuthenticationError, AuthorizationError

from api.domain.users.schemas import UserResponse


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "listUsers"


def test_list_users_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test list users request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = getfullargspec(operation.view_func)

    assert handler_specs.args == ["request"]
    assert handler_specs.annotations == {"request": HttpRequest}


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
