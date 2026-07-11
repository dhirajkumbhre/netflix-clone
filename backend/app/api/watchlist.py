from fastapi import APIRouter
from app.db.database import watchlist_collection

# Create the router FIRST
router = APIRouter(
    prefix="/api/watchlist",
    tags=["Watchlist"]
)


@router.post("/")
async def add_movie(movie: dict):

    # Check if movie already exists
    existing = await watchlist_collection.find_one({
        "user_email": movie["user_email"],
        "movie_id": movie["movie_id"]
    })

    if existing:
        return {
            "success": False,
            "message": "Movie already in watchlist"
        }

    await watchlist_collection.insert_one(movie)

    return {
        "success": True,
        "message": "Movie added successfully"
    }


@router.get("/{email}")
async def get_watchlist(email: str):

    movies = []

    async for movie in watchlist_collection.find({"user_email": email}):
        movie["_id"] = str(movie["_id"])
        movies.append(movie)

    return movies


@router.delete("/{email}/{movie_id}")
async def remove_movie(email: str, movie_id: int):

    await watchlist_collection.delete_one({
        "user_email": email,
        "movie_id": movie_id,
    })

    return {
        "success": True
    }