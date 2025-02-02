"""Module api.domain.users.api."""

from django.http import HttpRequest
from ninja import Query
from ninja.pagination import paginate
from ninja_extended.api import ExtendedRouter, response_factory
from ninja_extended.errors import AuthenticationError, AuthorizationError, CSRFError
from ninja_extended.pagination import PageNumberPageSizePagination

from api.domain.users.errors import (
    MultipleUsersReturnedError,
    UserCheckConstraintError,
    UserNotFoundError,
    UserNotNullConstraintError,
    UserProtectedError,
    UserUniqueConstraintError,
)
from api.domain.users.model import User
from api.domain.users.schemas import (
    UserCreateRequest,
    UserDeleteResponse,
    UserFitlerSchema,
    UserResponse,
    UserSelectResponse,
    UserSortSchema,
    UserUpdateRequest,
)

users_router = ExtendedRouter(tags=["users"])


@users_router.get(
    path="",
    operation_id="listUsers",
    summary="List users",
    response=response_factory(
        (200, list[UserResponse]),
        AuthenticationError,
        AuthorizationError,
    ),
)
@paginate(PageNumberPageSizePagination)
def list_users(request: HttpRequest, filters: UserFitlerSchema = Query(...), sort: UserSortSchema = Query(...)):  # noqa: ARG001, B008
    """List users route handler."""

    users = User.objects.list_users()

    users = filters.filter(queryset=users)

    return sort.sort(queryset=users)


@users_router.get(
    path="/selection",
    operation_id="selectUser",
    summary="User selection list",
    response=response_factory(
        (200, list[UserSelectResponse]),
        AuthenticationError,
        AuthorizationError,
    ),
)
def selection_list_users(request: HttpRequest):  # noqa: ARG001
    """List users route handler."""

    return 200, User.objects.selection_list()


@users_router.get(
    path="/{id}",
    operation_id="getUserById",
    summary="Get user by id",
    response=response_factory(
        (200, UserResponse),
        AuthenticationError,
        AuthorizationError,
        UserNotFoundError,
        MultipleUsersReturnedError,
    ),
)
def get_user_by_id(request: HttpRequest, id: int):  # noqa: ARG001, A002
    """Get user by id route handler."""

    return 200, User.objects.get_user_by_id(id=id)


@users_router.post(
    path="/",
    operation_id="createUser",
    summary="Create user",
    response=response_factory(
        (201, UserResponse),
        AuthenticationError,
        AuthorizationError,
        CSRFError,
        UserCheckConstraintError,
        UserNotNullConstraintError,
        UserUniqueConstraintError,
    ),
)
def create_user(request: HttpRequest, data: UserCreateRequest):  # noqa: ARG001
    """Create user route handler."""

    return 201, User.objects.create_user(**data.dict())


@users_router.patch(
    path="/{id}",
    operation_id="updateUser",
    summary="Update user",
    response=response_factory(
        (200, UserResponse),
        AuthenticationError,
        AuthorizationError,
        CSRFError,
        UserNotFoundError,
        MultipleUsersReturnedError,
        UserCheckConstraintError,
        UserNotNullConstraintError,
        UserUniqueConstraintError,
    ),
)
def update_user(request: HttpRequest, id: int, data: UserUpdateRequest):  # noqa: ARG001, A002
    """Update user route handler."""

    return 200, User.objects.update_user_by_id(id=id, **data.dict(exclude_unset=True))


@users_router.delete(
    path="/{id}",
    operation_id="deleteUser",
    summary="Delete user",
    response=response_factory(
        (204, UserDeleteResponse),
        AuthenticationError,
        AuthorizationError,
        CSRFError,
        UserNotFoundError,
        MultipleUsersReturnedError,
        UserProtectedError,
    ),
)
def delete_user(request: HttpRequest, id: int):  # noqa: ARG001, A002
    """Delete user route handler."""

    return 204, User.objects.delete_user_by_id(id=id)
