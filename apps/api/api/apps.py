"""Module api.apps."""

from django.apps import AppConfig


class ApiConfig(AppConfig):
    """Class ApiConfig."""

    default_auto_field = "django.db.models.BigAutoField"
    name = "api"
