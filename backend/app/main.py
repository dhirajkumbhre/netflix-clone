from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.movies import router as movies_router

from app.api.watchlist import router as watchlist_router


app = FastAPI(
    title="NetflixX API",
    version="1.0.0"
)

# Allow React frontend to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(movies_router)

@app.get("/")
async def root():
    return {
        "message": "Netflix API is running 🚀"
    }


app.include_router(watchlist_router)