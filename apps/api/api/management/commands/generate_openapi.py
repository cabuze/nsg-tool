"""Module management.commands.generate_openapi."""

import json
from pathlib import Path

from django.core.management.base import BaseCommand

from api.api import api


class Command(BaseCommand):
    """Generate OpenAPI schema and write to openapi.json."""

    help = "Generate OpenAPI schema and write to openapi.json"

    def add_arguments(self, parser):
        """Add arguments to the parser."""

        parser.add_argument(
            "--directory", type=str, help="Directory where the openapi.json file will be writte to.", default="."
        )

    def handle(self, *args, **kwargs):  # noqa: ARG002
        """Handle the command."""

        directory = Path(kwargs["directory"]).absolute()

        if not directory.exists():
            directory.mkdir(parents=True)

        file_path = directory / "openapi.json"

        schema = api.get_openapi_schema()

        with file_path.open(mode="w", encoding="utf-8") as f:
            json.dump(schema, f, indent=2)

        self.stdout.write(self.style.SUCCESS(f"Sccessfully generate '{file_path}'."))
