from fastapi import APIRouter

from app.services.tmdb_service import (
    get_trending_movies,
    get_popular_movies,
    get_top_rated_movies,
    get_upcoming_movies,
    get_movie,
    search_movies,
)

router = APIRouter(
    prefix="/api/movies",
    tags=["Movies"]
)


@router.get("/trending")
async def trending():
    return await get_trending_movies()


@router.get("/popular")
async def popular():
    return await get_popular_movies()


@router.get("/top-rated")
async def top_rated():
    return await get_top_rated_movies()


@router.get("/upcoming")
async def upcoming():
    return await get_upcoming_movies()


@router.get("/movie/{movie_id}")
async def movie(movie_id: int):
    return await get_movie(movie_id)


@router.get("/search")
async def search(query: str):
    return await search_movies(query)