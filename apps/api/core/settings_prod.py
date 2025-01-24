"""Production project settings."""

from core.config import settings
from core.settings_common import *  # noqa: F403

SECRET_KEY = settings.secret_key.get_secret_value()
DEBUG = True
ALLOWED_HOSTS = settings.allowed_hosts

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": settings.database_name,
        "USER": settings.database_user,
        "PASSWORD": settings.database_password.get_secret_value(),
        "HOST": settings.database_host,
        "PORT": settings.database_port,
    }
}

CORS_ALLOWED_ORIGINS = settings.cors_allowed_origins
CORS_TRUSTED_ORIGINS = settings.cors_trusted_origins
CSRF_TRUSTED_ORIGINS = settings.csrf_trusted_origins
