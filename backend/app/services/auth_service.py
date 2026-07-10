from datetime import datetime

from app.db.database import db
from app.models.user import User
from app.schemas.user import UserRegister, UserLogin
from app.utils.security import (
    hash_password,
    verify_password,
)
from app.utils.jwt import create_access_token


async def register_user(user: UserRegister):

    # Check if email already exists
    existing_user = await db["users"].find_one(
        {"email": user.email}
    )

    if existing_user:
        return {
            "success": False,
            "message": "Email already registered."
        }

    # Create user object
    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    # Save into MongoDB
    result = await db["users"].insert_one(
        new_user.model_dump()
    )

    return {
        "success": True,
        "message": "User registered successfully.",
        "user_id": str(result.inserted_id)
    }


async def login_user(user: UserLogin):

    # Find user by email
    existing_user = await db["users"].find_one(
        {"email": user.email}
    )

    if not existing_user:
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    # Verify password
    if not verify_password(
        user.password,
        existing_user["hashed_password"]
    ):
        return {
            "success": False,
            "message": "Invalid email or password."
        }

    # Create JWT token
    access_token = create_access_token(
        data={
            "sub": str(existing_user["_id"]),
            "email": existing_user["email"]
        }
    )

    return {
        "success": True,
        "access_token": access_token,
        "token_type": "bearer"
    }