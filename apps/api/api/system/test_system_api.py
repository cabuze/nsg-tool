"""Module api.system.test_system_api."""

from http import HTTPStatus

import pytest
from django.test import Client

from api.domain.users.factory import UserFactory
from utils import get_package_description, get_package_version


@pytest.fixture
def client():
    """Fixture for test client."""

    return Client()


@pytest.fixture
def user():
    """Fixture for user."""

    return UserFactory.create(is_active=True, is_staff=False, is_superuser=False)


@pytest.mark.django_db
def test_system_version(client, user):
    """Test system version."""

    client.login(username=user.email, password="password")  # noqa: S106

    response = client.get("/api/system/version")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "version": get_package_version(),
    }


@pytest.mark.django_db
def test_system_description(client, user):
    """Test system description."""

    client.login(username=user.email, password="password")  # noqa: S106

    response = client.get("/api/system/description")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "description": get_package_description(),
    }
