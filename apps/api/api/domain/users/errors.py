"""Module api.domain.users.errors."""

from ninja_extended.errors import (
    CheckConstraintError,
    MultipleObjectsReturnedError,
    NotFoundError,
    NotNullConstraintError,
    ProtectedError,
    UniqueConstraintError,
)


class MultipleUsersReturnedError(MultipleObjectsReturnedError):
    """Multiple users returned error."""

    resource = "User"


class UserNotFoundError(NotFoundError):
    """User not found error."""

    resource = "User"


class UserNotNullConstraintError(NotNullConstraintError):
    """User not null constraint error."""

    resource = "User"


class UserUniqueConstraintError(UniqueConstraintError):
    """User unique constraint error."""

    resource = "User"


class UserProtectedError(ProtectedError):
    """User protected error."""

    resource = "User"


class UserCheckConstraintError(CheckConstraintError):
    """User check constraint error."""

    resource = "User"
