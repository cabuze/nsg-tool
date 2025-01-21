"""Development project settings."""

from core.settings_common import *  # noqa: F403

SECRET_KEY = "secret_test_key_dev"  # noqa: S105
DEBUG = True
ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "nsg-tool-dev",
        "USER": "nsg-tool-dev",
        "PASSWORD": "nsg-tool-dev",
        "HOST": "localhost",
        "PORT": 5432,
    }
}
