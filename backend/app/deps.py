from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
import jwt
from app.core.security import SECRET_KEY, ALGORITHM

# DB Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Current user

def get_current_user(token: str, db: Session):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

    from app import models
    return db.query(models.User).filter(models.User.id == user_id).first()