"""
====================================================

USER MODEL

This file describes how a user
will be stored inside MongoDB.

Think of it as the blueprint
for every user.

====================================================
"""

from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class User(BaseModel):
    """
    User document stored in MongoDB.
    """

    username: str

    email: EmailStr

    hashed_password: str

    profile_picture: str = ""

    is_verified: bool = False

    created_at: datetime = Field(default_factory=datetime.utcnow)

    updated_at: datetime = Field(default_factory=datetime.utcnow)