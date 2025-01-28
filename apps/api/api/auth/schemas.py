"""Module api.auth.schemas."""

from typing import Literal

from ninja_extended.fields import EmailField, EmailFieldValues, StringField, StringFieldValues

from api.domain.users.schemas import UserResponse
from schemas import BaseSchema


class LoginFieldValues:
    """Login field values."""

    email = EmailFieldValues(description="The email of the user.")
    password = StringFieldValues(description="The password of the user.")


class LoginRequest(BaseSchema):
    """Login request schema."""

    email: str = EmailField(field_values=LoginFieldValues.email)
    password: str = StringField(field_values=LoginFieldValues.password)


class LoginResponse(UserResponse):
    """Login response schema."""


class LogoutFieldValues:
    """Logout field values."""

    message = StringFieldValues(description="The message of the logout response.", strict=None)


class LogoutResponse(BaseSchema):
    """Logout response schema."""

    message: Literal["Logout successful"] = StringField(field_values=LogoutFieldValues.message)


class MeResponse(UserResponse):
    """Me response schema."""
