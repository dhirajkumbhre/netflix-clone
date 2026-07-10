"""
========================================================

USER SCHEMAS

Schemas define what data the API expects
and what data it returns.

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


class UserLogin(BaseModel):
    """
    Data required when a user logs in.
    """

    email: EmailStr

    password: str = Field(
        ...,
        min_length=8,
        max_length=100
    )

class UserResponse(BaseModel):
    id: str
    username: str
    email: EmailStr

    class Config:
        from_attributes = True