"""Module api.api."""

from ninja_extended.api import ExtendedNinjaAPI
from ninja_extended.auth import session_auth
from ninja_extended.errors import (
    AuthenticationError,
    AuthorizationError,
    CheckConstraintError,
    CSRFError,
    MultipleObjectsReturnedError,
    NotFoundError,
    NotNullConstraintError,
    ProtectedError,
    UniqueConstraintError,
    register_error_handler,
    register_validation_error_handler,
)

from api.auth.api import auth_router
from api.auth.errors import InvalidCredentialsError
from api.domain.users.api import users_router
from api.system.api import system_router
from utils import get_package_description, get_package_version

api = ExtendedNinjaAPI(
    title="NSG Tool API",
    version=get_package_version(),
    description=get_package_description(),
    auth=[session_auth()],
)

# Routers
api.add_router(prefix="auth", router=auth_router)
api.add_router(prefix="users", router=users_router)
api.add_router(prefix="system", router=system_router)

# Errors
register_error_handler(api=api, error_type=AuthenticationError)
register_error_handler(api=api, error_type=AuthorizationError)
register_error_handler(api=api, error_type=CheckConstraintError)
register_error_handler(api=api, error_type=CSRFError)
register_error_handler(api=api, error_type=MultipleObjectsReturnedError)
register_error_handler(api=api, error_type=NotFoundError)
register_error_handler(api=api, error_type=NotNullConstraintError)
register_error_handler(api=api, error_type=ProtectedError)
register_error_handler(api=api, error_type=UniqueConstraintError)
register_error_handler(api=api, error_type=InvalidCredentialsError)
register_validation_error_handler(api=api)
