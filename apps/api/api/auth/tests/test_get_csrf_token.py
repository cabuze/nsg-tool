"""Module api.auth.tests.test_get_csrf_token."""

from http import HTTPStatus

import pytest
from django.http import HttpRequest
from django.test import Client
from ninja_extended.api import ExtendedRouter
from ninja_extended.api.utils import get_full_arg_spec, get_operation_from_router_by_operation_id


@pytest.fixture
def path() -> str:
    """Fixture for path."""

    return "/api/auth/csrf"


@pytest.fixture
def operation_id() -> str:
    """Fixture for operation id."""

    return "getCSRFToken"


def test_csrf_request_schemas(router: ExtendedRouter, operation_id: str):
    """Test csrf request schemas."""

    operation = get_operation_from_router_by_operation_id(router=router, operation_id=operation_id)
    handler_specs = get_full_arg_spec(operation.view_func)

    assert handler_specs.args == ["request"]
    assert handler_specs.annotations == {"request": HttpRequest}


def test_csrf_sets_cookie(test_client: Client, path: str):
    """Test operation getCSRFToken."""

    response = test_client.post(path=path)

    assert response.status_code == HTTPStatus.OK
    assert "csrftoken" in response.cookies
