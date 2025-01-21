"""Production project settings."""

from core.config import settings
from core.settings_common import *  # noqa: F403

SECRET_KEY = settings.secret_key.get_secret_value()
DEBUG = settings.debug
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
