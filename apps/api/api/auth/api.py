"""Module auth.api."""

from django.contrib.auth import authenticate, login, logout
from django.http import HttpRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from ninja.utils import check_csrf
from ninja_extended.api import ExtendedRouter, response_factory
from ninja_extended.errors import AuthenticationError, AuthorizationError, CSRFError

from api.auth.errors import InvalidCredentialsError
from api.auth.schemas import LoginRequest, LoginResponse, LogoutResponse, MeResponse

auth_router = ExtendedRouter(tags=["auth"])


@auth_router.post(
    path="csrf",
    operation_id="getCSRFToken",
    summary="Get CSRF token",
    auth=None,
)
@ensure_csrf_cookie
@csrf_exempt
def csrf_handler(request: HttpRequest):  # noqa: ARG001
    """Get CSRF token route handler."""

    return HttpResponse()


@auth_router.post(
    path="/login",
    operation_id="login",
    summary="Login an user",
    response=response_factory((200, LoginResponse), InvalidCredentialsError, CSRFError),
    auth=None,
)
def login_handler(request: HttpRequest, data: LoginRequest):
    """Login an user route handler."""

    if check_csrf(request=request):
        raise CSRFError

    user = authenticate(request=request, username=data.email, password=data.password)

    if user is not None and user.is_active:
        login(request=request, user=user)
        return user

    raise InvalidCredentialsError


@auth_router.post(
    path="logout",
    operation_id="logout",
    summary="Logout a user",
    response=response_factory((200, LogoutResponse), AuthenticationError, AuthorizationError, CSRFError),
)
def logout_handler(request: HttpRequest):
    """Logout an user route handler."""

    logout(request=request)

    return {"message": "Logout successful"}


@auth_router.get(
    "me",
    operation_id="me",
    summary="Get the logged in user",
    response=response_factory((200, MeResponse), AuthenticationError, AuthorizationError),
)
def me_handler(request: HttpRequest):
    """Get logged in user route handler."""

    return request.user
