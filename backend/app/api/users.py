from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.deps import get_db, get_current_user
from app.schemas import UserOut

router = APIRouter()

@router.get("/me", response_model=UserOut)
def get_profile(current_user=Depends(get_current_user)):
    return current_user