"""Module schemas."""

from datetime import datetime
from typing import Annotated

from ninja import Schema
from pydantic import AliasGenerator, ConfigDict, PlainSerializer
from pydantic.alias_generators import to_camel


class BaseSchema(Schema):
    """Base schema."""

    model_config = ConfigDict(
        alias_generator=AliasGenerator(serialization_alias=to_camel),
        extra="forbid",
    )


Datetime = Annotated[datetime, PlainSerializer(lambda dt: dt.isoformat())]
