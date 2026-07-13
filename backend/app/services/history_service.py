from app.db.mongodb import db

history_collection = db.history


# ==========================================
# save movie to ContiNue Watching history
# ==========================================

async def save_history(user_email: str, movie_id: int):

    #prevent duplicate history entries
    existing = await history_collection.find_one({
        "user_email": user_email,
        "movie_id": movie_id,
    })

    if existing:
        return {"success": True}

    await history_collection.insert_one({
        "user_email": user_email,
        "movie_id": movie_id,
    })

    return {"success": True}


# ==========================================
#get continue Watching history
# ==========================================

async def get_history(user_email: str):

    history = []

    cursor = history_collection.find({
        "user_email": user_email
    })

    async for movie in cursor:
        movie["_id"] = str(movie["_id"])
        history.append(movie)

    return history