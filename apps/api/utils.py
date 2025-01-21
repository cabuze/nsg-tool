"""Module uitls."""

from pathlib import Path

import toml


def __get_project_attribute(attribute: str) -> str:
    file_not_found_error_message = "Could not find file pyproject.toml"
    pyproject_toml_file = Path(__file__).parent / "pyproject.toml"

    if not pyproject_toml_file.exists() or not pyproject_toml_file.is_file():
        raise RuntimeError(file_not_found_error_message)

    return toml.load(pyproject_toml_file)["project"][attribute]


def get_package_version() -> str:
    """Get package version."""

    return __get_project_attribute(attribute="version")


def get_package_description() -> str:
    """Get package description."""

    return __get_project_attribute(attribute="description")
