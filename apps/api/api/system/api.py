"""Module api.system.api."""

from django.http import HttpRequest
from ninja_extended.api import ExtendedRouter, response_factory

from api.system.schemas import SystemDescriptionSchema, SystemVersionSchema
from utils import get_package_description, get_package_version

system_router = ExtendedRouter(tags=["system"])


@system_router.get(
    "version",
    operation_id="getVersion",
    summary="Get the API version",
    response=response_factory((200, SystemVersionSchema)),
)
def version(request: HttpRequest):  # noqa: ARG001
    """Get the API version."""

    return {
        "version": get_package_version(),
    }


@system_router.get(
    "description",
    operation_id="getDescription",
    summary="Get the API description",
    response=response_factory((200, SystemDescriptionSchema)),
)
def description(request: HttpRequest):  # noqa: ARG001
    """Get the API description."""

    return {
        "description": get_package_description(),
    }
