from pydantic import BaseModel

class History(BaseModel):
    user_email:str
    movie_id:int