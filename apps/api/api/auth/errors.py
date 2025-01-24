"""Module api.auth.errors."""

from typing import Literal

from ninja_extended.errors import APIError, APIErrorResponse


class InvalidCredentialsErrorResponse(APIErrorResponse):
    """Invalid credentials error response."""

    status: Literal[401]
    message: Literal["Invalid credentials"]


class InvalidCredentialsError(APIError):
    """Invalid credentials error."""

    status = 401
    schema = InvalidCredentialsErrorResponse

    def __init__(self):
        """Initialize an InvalidCredentialsError."""

        super().__init__(type="errors/invalid-credentials")

        self.message = "Invalid credentials"

    def to_dict(self):
        """Serialize the CheckConstraintError."""

        base_dict = super().to_dict()
        base_dict.update(
            {
                "message": self.message,
            }
        )

        return base_dict
