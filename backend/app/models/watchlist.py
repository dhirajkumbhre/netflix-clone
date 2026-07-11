from pydantic import BaseModel


class WatchlistItem(BaseModel):
    user_email: str
    movie_id: int