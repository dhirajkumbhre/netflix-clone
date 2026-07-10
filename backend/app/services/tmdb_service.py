import httpx

from app.core.config import settings

BASE_URL = "https://api.themoviedb.org/3"


async def fetch(endpoint: str, params: dict = None):
    params = params or {}

    params["api_key"] = settings.TMDB_API_KEY

    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/{endpoint}",
            params=params
        )

    response.raise_for_status()

    return response.json()


async def get_trending_movies():
    return await fetch("trending/movie/week")


async def get_popular_movies():
    return await fetch("movie/popular")


async def get_top_rated_movies():
    return await fetch("movie/top_rated")


async def get_upcoming_movies():
    return await fetch("movie/upcoming")


async def get_movie(movie_id: int):
    return await fetch(f"movie/{movie_id}")


async def search_movies(query: str):
    return await fetch(
        "search/movie",
        {"query": query}
    )