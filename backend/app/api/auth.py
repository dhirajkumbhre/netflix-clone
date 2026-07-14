# ==========================================================
# Main Authentication Routes
#
# Handles:
# - User Registration
# - User Login
# - Current Logged-in User
#
# Base URL:
# /api/auth
# ==========================================================

from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user
from app.schemas.user import UserRegister, UserLogin
from app.services.auth_service import (
    register_user,
    login_user,
)

# ----------------------------------------------------------
# Authentication Router
#
# All routes below start with:
# /api/auth
# ----------------------------------------------------------

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)

# ----------------------------------------------------------
# Register a new user
#
# POST /api/auth/register
# ----------------------------------------------------------

@router.post("/register")
async def register(user: UserRegister):
    return await register_user(user)

# ----------------------------------------------------------
# Login existing user
#
# POST /api/auth/login
# ----------------------------------------------------------

@router.post("/login")
async def login(user: UserLogin):
    return await login_user(user)

# ----------------------------------------------------------
# Get currently logged-in user
#
# Requires JWT token
#
# GET /api/auth/me
# ----------------------------------------------------------

@router.get("/me")
async def get_me(current_user=Depends(get_current_user)):
    return current_user