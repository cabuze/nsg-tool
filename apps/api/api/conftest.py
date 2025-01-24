"""Module api.conftest."""

import pytest
from django.test import Client


@pytest.fixture
def test_client():
    """Fixture for test client."""

    return Client()


@pytest.fixture
def csrf_test_client():
    """Fixture for django test client."""

    return Client(enforce_csrf_checks=True)
