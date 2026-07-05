"""
========================================================

USER SCHEMAS

Schemas define what data the API expects
and what data it returns.

Think of a schema as a security guard.

Before data enters our application,
it checks:

✔ Is the username present?
✔ Is the email valid?
✔ Is the password long enough?

Only valid data is allowed through.

========================================================
"""

from pydantic import BaseModel, EmailStr, Field


class UserRegister(BaseModel):
    """
    Data required when a user registers.
    """

    username: str = Field(
        ...,
        min_length=3,
        max_length=30,
        description="User's display name"
    )

    email: EmailStr

    password: str = Field(
        ...,
        min_length=8,
        max_length=100,
        description="User password"
    )