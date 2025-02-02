"""Module api.domain.users.tests.conftest."""

import pytest
from django.db.models import Field
from ninja_extended.api import ExtendedRouter

from api.domain.users.api import users_router
from api.domain.users.factory import UserFactory
from api.domain.users.model import User, UserManager


@pytest.fixture
def model() -> type[User]:
    """Fixture for model."""

    return User


@pytest.fixture
def manager() -> type[UserManager]:
    """Fixture for manager."""

    return User.objects


@pytest.fixture
def fields(model) -> list[type[Field]]:
    """Fixture for fields."""

    return model._meta.fields  # noqa: SLF001


@pytest.fixture
def field_names(model) -> list[str]:
    """Fixture for field names."""

    return [field.name for field in model._meta.fields]  # noqa: SLF001


@pytest.fixture
def field(model, request) -> Field:
    """Fixture for field."""

    field_name = request.param

    return model._meta.get_field(field_name=field_name)  # noqa: SLF001


@pytest.fixture
def router() -> ExtendedRouter:
    """Fixture for router."""

    return users_router


@pytest.fixture
def user() -> User:
    """Fixture for user."""

    return UserFactory.create(is_active=True, is_staff=False, is_superuser=False)


@pytest.fixture
def users() -> list[User]:
    """Fixture for user."""

    return UserFactory.create_batch(size=10)
