"""Module api.system.schemas."""

from ninja import Schema
from ninja_extended.fields import StringField, StringFieldValues


class SystemVersionFieldValues:
    """System version field values."""

    version = StringFieldValues(description="The API version.")


class SystemDescriptionFieldValues:
    """System description field values."""

    description = StringFieldValues(description="The API description.")


class SystemVersionSchema(Schema):
    """System version schema."""

    version: str = StringField(field_values=SystemVersionFieldValues.version)


class SystemDescriptionSchema(Schema):
    """System description schema."""

    description: str = StringField(field_values=SystemDescriptionFieldValues.description)
