"""Module api.auth.tests.conftest."""

import pytest
from ninja_extended.api import ExtendedRouter

from api.auth.api import auth_router
from api.domain.users.factory import UserFactory
from api.domain.users.model import User


@pytest.fixture
def router() -> ExtendedRouter:
    """Fixture for router."""

    return auth_router


@pytest.fixture
def user() -> User:
    """Fixture for user."""

    return UserFactory.create(is_active=True, is_staff=False, is_superuser=False)


@pytest.fixture
def user_inactive():
    """Fixture for inactive user."""

    return UserFactory.create(is_active=False)
