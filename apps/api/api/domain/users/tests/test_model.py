"""Module api.domain.users.test.test_model."""

import pytest
from django.db.models import BigAutoField, BooleanField, CharField, DateTimeField, EmailField

from api.domain.users.model import UserManager


@pytest.mark.parametrize("field", ["id"], indirect=True)
def test_id_field(field, field_names) -> None:
    """Test id field."""

    assert field.name in field_names
    assert field.verbose_name == "id"
    assert field.primary_key
    assert field.unique
    assert not field.null
    assert not field.editable
    assert isinstance(field, BigAutoField)


@pytest.mark.parametrize("field", ["display_name"], indirect=True)
def test_display_name_field(field, field_names) -> None:
    """Test display name field."""

    assert field.name in field_names
    assert field.verbose_name == "display name"
    assert not field.primary_key
    assert field.unique
    assert not field.null
    assert not field.blank
    assert isinstance(field, CharField)


@pytest.mark.parametrize("field", ["email"], indirect=True)
def test_email_field(field, field_names) -> None:
    """Test email field."""

    assert field.name in field_names
    assert field.verbose_name == "email"
    assert not field.primary_key
    assert field.unique
    assert not field.null
    assert not field.blank
    assert isinstance(field, EmailField)


@pytest.mark.parametrize("field", ["password"], indirect=True)
def test_password_field(field, field_names) -> None:
    """Test password field."""

    assert field.name in field_names
    assert field.verbose_name == "password"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert not field.blank
    assert isinstance(field, CharField)


@pytest.mark.parametrize("field", ["is_active"], indirect=True)
def test_is_active_field(field, field_names) -> None:
    """Test is_active field."""

    assert field.name in field_names
    assert field.verbose_name == "is_active"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert not field.blank
    assert field.default is True
    assert isinstance(field, BooleanField)


@pytest.mark.parametrize("field", ["is_staff"], indirect=True)
def test_is_staff_field(field, field_names) -> None:
    """Test is_staff field."""

    assert field.name in field_names
    assert field.verbose_name == "is_staff"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert not field.blank
    assert field.default is False
    assert isinstance(field, BooleanField)


@pytest.mark.parametrize("field", ["is_superuser"], indirect=True)
def test_is_superuser_field(field, field_names) -> None:
    """Test is_superuser field."""

    assert field.name in field_names
    assert field.verbose_name == "is_superuser"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert not field.blank
    assert field.default is False
    assert isinstance(field, BooleanField)


@pytest.mark.parametrize("field", ["last_login"], indirect=True)
def test_last_login_field(field, field_names) -> None:
    """Test last_login field."""

    assert field.name in field_names
    assert field.verbose_name == "last_login"
    assert not field.primary_key
    assert not field.unique
    assert field.null
    assert field.blank
    assert isinstance(field, DateTimeField)


@pytest.mark.parametrize("field", ["created_at"], indirect=True)
def test_created_at_field(field, field_names) -> None:
    """Test created_at field."""

    assert field.name in field_names
    assert field.verbose_name == "created_at"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert field.blank
    assert isinstance(field, DateTimeField)


@pytest.mark.parametrize("field", ["updated_at"], indirect=True)
def test_updated_at_field(field, field_names) -> None:
    """Test updated_at field."""

    assert field.name in field_names
    assert field.verbose_name == "updated_at"
    assert not field.primary_key
    assert not field.unique
    assert not field.null
    assert field.blank
    assert isinstance(field, DateTimeField)


def test_manager_type(manager) -> None:
    """Test manager type."""

    assert isinstance(manager, UserManager)
