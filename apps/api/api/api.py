"""Module api.api."""

from ninja_extended.api import ExtendedNinjaAPI

from api.system.api import system_router
from utils import get_package_description, get_package_version

api = ExtendedNinjaAPI(
    title="NSG Tool API",
    version=get_package_version(),
    description=get_package_description(),
)

api.add_router(prefix="system", router=system_router)
