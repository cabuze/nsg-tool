"""Schema for project settings."""

from pydantic import SecretStr, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class ApplicationSettings(BaseSettings):
    """Application settings."""

    secret_key: SecretStr
    debug: bool
    allowed_hosts: list[str] | str

    database_user: str
    database_password: SecretStr
    database_name: str
    database_host: str
    database_port: int

    frontend_urls: list[str] | str

    @field_validator("allowed_hosts", mode="before")
    def validate_allowed_hosts(cls, value):  # noqa: N805
        """Convert a single allowed host to a list."""

        if isinstance(value, list):
            return value

        return [value]

    @field_validator("frontend_urls", mode="before")
    def validate_frontend_urls(cls, value):  # noqa: N805
        """Convert a single frontend urls to a list."""

        if isinstance(value, list):
            return value

        return [value]

    model_config = SettingsConfigDict(env_file=".env")


settings = ApplicationSettings()
