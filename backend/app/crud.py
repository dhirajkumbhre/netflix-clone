from sqlalchemy.orm import Session
from app import models, schemas
from app.core.security import hash_password

def create_user(db: Session, user: schemas.UserCreate):
    hashed_pw = hash_password(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_pw)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def add_to_watchlist(db: Session, user_id: int, movie_id: int):
    item = models.Watchlist(user_id=user_id, movie_id=movie_id)
    db.add(item)
    db.commit()
    return item