from datetime import datetime

from app.db.database import db
from app.models.user import User
from app.schemas.user import UserRegister
from app.utils.security import hash_password


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
# Save into MongoDB
    result = await db["users"].insert_one(
        new_user.model_dump()
    )

    return {
        "success": True,
        "message": "User registered successfully.",
        "user_id": str(result.inserted_id)
     }
