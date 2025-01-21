"""Test project settings."""

from core.settings_common import *  # noqa: F403

SECRET_KEY = "secret_test_key_test"  # noqa: S105
DEBUG = True
ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "nsg-tool-test",
        "USER": "nsg-tool-test",
        "PASSWORD": "nsg-tool-test",
        "HOST": "localhost",
        "PORT": 32768,
    }
}
