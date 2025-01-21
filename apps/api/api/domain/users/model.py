"""Module api.domain.users.model."""

from typing import ClassVar

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db.models import BigAutoField, BooleanField, CharField, DateTimeField, EmailField, QuerySet


class UserQuerySet(QuerySet["User"]):
    """User QuerySet."""


class UserManager(BaseUserManager["User"]):
    """User Manager."""

    def get_queryset(self) -> QuerySet["User"]:
        """Get User QuerySet."""

        return UserQuerySet(model=self.model, using=self._db)


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
