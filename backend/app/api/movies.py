from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.deps import get_db
from app import crud

router = APIRouter()

@router.post("/{movie_id}/watchlist")
def add_to_watchlist(movie_id: int, db: Session = Depends(get_db)):
    user_id = 1  # TEMP — replace with JWT user later
    return crud.add_to_watchlist(db, user_id, movie_id)