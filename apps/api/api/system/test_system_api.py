"""Module api.system.test_system_api."""

from http import HTTPStatus

import pytest
from django.test import Client

from utils import get_package_description, get_package_version


@pytest.fixture
def client():
    """Fixture for test client."""

    return Client()


def test_system_version(client):
    """Test system version."""

    response = client.get("/api/system/version")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "version": get_package_version(),
    }


def test_system_description(client):
    """Test system description."""

    response = client.get("/api/system/description")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        "description": get_package_description(),
    }
