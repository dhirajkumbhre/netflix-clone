

from fastapi import APIRouter
from fastapi import Depends
from app.core.dependencies import get_current_user
from app.schemas.user import UserRegister, UserLogin, UserResponse
from app.services.auth_service import (
    register_user,
    login_user
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


@router.post("/register")
async def register(user: UserRegister):
    return await register_user(user)


@router.post("/login")
async def login(user: UserLogin):
    return await login_user(user)

@router.get("/me")
async def get_me(current_user=Depends(get_current_user)):
    return current_user