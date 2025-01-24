"""Module api.domain.users.factory."""

from factory import Faker
from factory.django import DjangoModelFactory

from .model import User


class UserFactory(DjangoModelFactory):
    """User factory."""

    class Meta:
        """Meta class for UserFactory."""

        model = User

    email = Faker("email")
    display_name = Faker("first_name")
    password = "password"  # noqa: S105
    is_active = True
    is_staff = False
    is_superuser = False

    @classmethod
    def _create(cls, model_class, *args, **kwargs):
        manager = cls._get_manager(model_class)

        return manager.create_user(*args, **kwargs)
