from fastapi import APIRouter

from app.schemas.user import UserRegister
from app.services.auth_service import register_user

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


@router.post("/register")
async def register(user: UserRegister):
    return await register_user(user)