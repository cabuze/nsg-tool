"""Module api.domain.users.model."""

from typing import ClassVar

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import IntegrityError
from django.db.models import BigAutoField, BooleanField, CharField, DateTimeField, EmailField, ProtectedError, QuerySet
from django.db.transaction import atomic
from ninja.constants import NOT_SET, NOT_SET_TYPE
from ninja_extended.errors import handle_integrity_error, handle_protected_error

from api.domain.users.errors import (
    MultipleUsersReturnedError,
    UserCheckConstraintError,
    UserNotFoundError,
    UserNotNullConstraintError,
    UserProtectedError,
    UserUniqueConstraintError,
)


class UserQuerySet(QuerySet["User"]):
    """User QuerySet."""


class UserManager(BaseUserManager["User"]):
    """User Manager."""

    def get_queryset(self) -> QuerySet["User"]:
        """Get User QuerySet."""

        return UserQuerySet(model=self.model, using=self._db)

    def list_users(self) -> QuerySet["User"]:
        """List users."""

        return self.get_queryset().order_by("id")

    def selection_list(self) -> QuerySet:
        """Generate selection list for users."""

        return self.get_queryset().only("id", "email", "display_name").order_by("email")

    def get_user_by_id(self, id: int) -> "User":  # noqa: A002
        """Get user by id."""

        try:
            return self.get_queryset().get(id=id)
        except self.model.DoesNotExist as error:
            raise UserNotFoundError(fields={"id": id}) from error
        except self.model.MultipleObjectsReturned as error:
            raise MultipleUsersReturnedError(fields={"id": id}) from error

    def create_user(  # noqa: PLR0913
        self,
        email: str,
        display_name: str,
        password: str,
        is_active: bool = True,  # noqa: FBT001, FBT002
        is_staff: bool = False,  # noqa: FBT001, FBT002
        is_superuser: bool = False,  # noqa: FBT001, FBT002
    ) -> "User":
        """Create an user.

        Args:
            email (str): The email of the user.
            display_name (str): The display name of the user.
            password (str): The password of the user.
            is_active (bool, optional): The is active status of the user. Defaults to True.
            is_staff (bool, optional): The is_staff status of the user. Defaults to False.
            is_superuser (bool, optional): The is_superuser status of the user. Defaults to False.

        Returns:
            User: The created user.
        """

        with atomic():
            try:
                user = self.model(
                    email=self.normalize_email(email),
                    display_name=display_name,
                    is_staff=is_staff,
                    is_active=is_active,
                    is_superuser=is_superuser,
                )

                user.set_password(password)
                user.save()

            except IntegrityError as integrity_error:
                handle_integrity_error(
                    error=integrity_error,
                    unique_constraint_error_type=UserUniqueConstraintError,
                    not_null_constraint_error_type=UserNotNullConstraintError,
                    check_constraint_error_type=UserCheckConstraintError,
                    data={
                        "email": email,
                        "display_name": display_name,
                        "is_active": is_active,
                        "is_staff": is_staff,
                        "is_superuser": is_superuser,
                    },
                )

            else:
                return user

    def update_user_by_id(  # noqa: PLR0913
        self,
        id: int,  # noqa: A002
        email: str | NOT_SET_TYPE = NOT_SET,
        display_name: str | NOT_SET_TYPE = NOT_SET,
        password: str | NOT_SET_TYPE = NOT_SET,
        is_active: bool | NOT_SET_TYPE = NOT_SET,
        is_staff: bool | NOT_SET_TYPE = NOT_SET,
        is_superuser: bool | NOT_SET_TYPE = NOT_SET,
    ) -> "User":
        """Update an user by id.

        Args:
            id (int): The id of the user.
            email (str | NOT_SET_TYPE, optional): The email of the user. Defaults to NOT_SET.
            display_name (str | NOT_SET_TYPE, optional): The display name of the user. Defaults to NOT_SET.
            password (str | NOT_SET_TYPE, optional): The password of the user. Defaults to NOT_SET.
            is_active (bool | NOT_SET_TYPE, optional): The is active status of the user. Defaults to NOT_SET.
            is_staff (bool | NOT_SET_TYPE, optional): The is_staff status of the user. Defaults to NOT_SET.
            is_superuser (bool | NOT_SET_TYPE, optional): The is_superuser status of the user. Defaults to NOT_SET.

        Returns:
            User: The updated user.
        """

        with atomic():
            try:
                user = self.get_user_by_id(id=id)

                data = {
                    "email": email,
                    "display_name": display_name,
                    "is_active": is_active,
                    "is_staff": is_staff,
                    "is_superuser": is_superuser,
                }

                field_updated = False

                if email is not NOT_SET:
                    user.email = self.normalize_email(email)
                    field_updated = True

                if password is not NOT_SET:
                    user.set_password(password)
                    field_updated = True

                for field, value in data.items():
                    if value is not NOT_SET:
                        setattr(user, field, value)
                        field_updated = True

                if field_updated:
                    user.save()

                return user  # noqa: TRY300

            except self.model.DoesNotExist as error:
                raise UserNotFoundError(fields={"id": id}) from error
            except self.model.MultipleObjectsReturned as error:
                raise MultipleUsersReturnedError(fields={"id": id}) from error
            except IntegrityError as integrity_error:
                handle_integrity_error(
                    error=integrity_error,
                    unique_constraint_error_type=UserUniqueConstraintError,
                    not_null_constraint_error_type=UserNotNullConstraintError,
                    check_constraint_error_type=UserCheckConstraintError,
                    data=data,
                )

    def delete_user_by_id(self, id: int) -> None:  # noqa: A002
        """Delete an user by id.

        Args:
            id (int): The id of the user.
        """

        try:
            return self.get_queryset().get(id=id).delete()
        except self.model.DoesNotExist as error:
            raise UserNotFoundError(fields={"id": id}) from error
        except self.model.MultipleObjectsReturned as error:
            raise MultipleUsersReturnedError(fields={"id": id}) from error
        except ProtectedError as error:
            handle_protected_error(error=error, protected_error_type=UserProtectedError)


class User(AbstractBaseUser, PermissionsMixin):
    """User Model."""

    id = BigAutoField(verbose_name="id", primary_key=True, unique=True, editable=False)
    display_name = CharField(verbose_name="display name", max_length=128, unique=True, blank=False, null=False)
    email = EmailField(verbose_name="email", unique=True, blank=False, null=False)
    password = CharField(verbose_name="password", max_length=128)
    is_active = BooleanField(verbose_name="is_active", default=True)
    is_staff = BooleanField(verbose_name="is_staff", default=False)
    is_superuser = BooleanField(verbose_name="is_superuser", default=False)
    last_login = DateTimeField(verbose_name="last_login", blank=True, null=True)
    created_at = DateTimeField(verbose_name="created_at", auto_now_add=True)
    updated_at = DateTimeField(verbose_name="updated_at", auto_now=True)

    USERNAME_FIELD: ClassVar[str] = "email"
    REQUIRED_FIELDS: ClassVar[list[str]] = []

    objects: ClassVar[UserManager] = UserManager()
