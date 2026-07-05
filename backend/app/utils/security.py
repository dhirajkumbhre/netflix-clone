"""
========================================================

SECURITY UTILITIES

This file handles password security.

Responsibilities:

1. Hash passwords before saving.
2. Verify passwords during login.

Never store plain-text passwords.

========================================================
"""

from passlib.context import CryptContext

# Configure bcrypt as the hashing algorithm.
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password: str) -> str:
    """
    Convert a plain password into a secure hash.

    Example:

    Input:
        mypassword123

    Output:
        $2b$12$...

    The output is what gets stored in MongoDB.
    """

    return pwd_context.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str
) -> bool:
    """
    Compare the user's login password
    with the hashed password stored
    in the database.

    Returns:

    True
        Password is correct.

    False
        Password is incorrect.
    """

    return pwd_context.verify(
        plain_password,
        hashed_password
    )