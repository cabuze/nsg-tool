"""Module api.domain.users.schemas."""

from ninja.filter_schema import FilterSchema
from ninja_extended.fields import (
    BoolField,
    BoolFieldValues,
    DatetimeField,
    DatetimeFieldValues,
    EmailField,
    EmailFieldValues,
    IntField,
    IntFieldValues,
    StringField,
    StringFieldValues,
)
from ninja_extended.sorting import SortableFieldsEnum, SortSchema
from pydantic import EmailStr, Field

from schemas import BaseSchema, Datetime


class UserFieldValues:
    """User field values."""

    id = IntFieldValues(description="The id of the user.")
    display_name = StringFieldValues(description="The display name of the user.")
    email = EmailFieldValues(description="The email of the user.")
    password = StringFieldValues(description="The password of the user.")
    is_active = BoolFieldValues(description="The is active status of the user.")
    is_staff = BoolFieldValues(description="The is staff status of the user.")
    is_superuser = BoolFieldValues(description="The is superuser status of the user.")
    last_login = DatetimeFieldValues(description="The the timestamp of the last login of the user.")
    created_at = DatetimeFieldValues(description="The timestamp of creation of the user.")
    updated_at = DatetimeFieldValues(description="The timestamp of the last update of the user.")


class UserCreateRequest(BaseSchema):
    """User create schema."""

    display_name: str = StringField(field_values=UserFieldValues.display_name)
    email: EmailStr = EmailField(field_values=UserFieldValues.email)
    password: str = StringField(field_values=UserFieldValues.password)
    is_active: bool = BoolField(field_values=UserFieldValues.is_active, default=True)
    is_staff: bool = BoolField(field_values=UserFieldValues.is_staff, default=False)
    is_superuser: bool = BoolField(field_values=UserFieldValues.is_superuser, default=False)


class UserUpdateRequest(BaseSchema):
    """User update schema."""

    display_name: str | None = StringField(field_values=UserFieldValues.display_name, default=None)
    email: EmailStr | None = EmailField(field_values=UserFieldValues.email, default=None)
    password: str | None = StringField(field_values=UserFieldValues.password, default=None)
    is_active: bool | None = BoolField(field_values=UserFieldValues.is_active, default=None)
    is_staff: bool | None = BoolField(field_values=UserFieldValues.is_staff, default=None)
    is_superuser: bool | None = BoolField(field_values=UserFieldValues.is_superuser, default=None)


class UserResponse(BaseSchema):
    """User response schema."""

    id: int = IntField(field_values=UserFieldValues.id)
    display_name: str = StringField(field_values=UserFieldValues.display_name)
    email: EmailStr = EmailField(field_values=UserFieldValues.email)
    is_active: bool = BoolField(field_values=UserFieldValues.is_active)
    is_staff: bool = BoolField(field_values=UserFieldValues.is_staff)
    is_superuser: bool = BoolField(field_values=UserFieldValues.is_superuser)
    last_login: Datetime | None = DatetimeField(field_values=UserFieldValues.last_login)
    created_at: Datetime = DatetimeField(field_values=UserFieldValues.created_at)
    updated_at: Datetime = DatetimeField(field_values=UserFieldValues.updated_at)


class UserSelectResponse(BaseSchema):
    """User selection response schema."""

    id: int = IntField(field_values=UserFieldValues.id)
    display_name: str = StringField(field_values=UserFieldValues.display_name)
    email: EmailStr = EmailField(field_values=UserFieldValues.email)


class UserDeleteResponse(BaseSchema):
    """User delete response schema."""


class UserFitlerSchema(FilterSchema):
    """User filter schema."""

    email: str | None = Field(default=None, q="email__icontains", description="Filter by the email of the user.")
    display_name: str | None = Field(
        default=None, q="display_name__icontains", description="Filter by the display name of the user."
    )
    is_active: bool | None = Field(default=None, description="Filter by the is active of the user.")
    search: str | None = Field(
        default=None,
        q=["email__icontains", "display_name__icontains"],
        description="Filter by the email or display name of the user.",
    )


class UserSortableFieldsEnum(SortableFieldsEnum):
    """User sortable fields enum."""

    email = "email"
    display_name = "display_name"
    created_at = "created_at"


class UserSortSchema(SortSchema):
    """User sort schema."""

    ordering: list[UserSortableFieldsEnum] | None = Field(
        default=None, description="Sort by email, display_name or timestamp of creation of the user."
    )
