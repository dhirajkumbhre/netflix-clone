from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.db.database import client
from app.core.config import settings


# ============================================
# Runs when FastAPI starts and stops
# ============================================

@asynccontextmanager
async def lifespan(app: FastAPI):

    # Startup
    try:
        await client.admin.command("ping")
        print("✅ Connected to MongoDB Atlas")
    except Exception as e:
        print("❌ MongoDB Connection Failed")
        print(e)

    yield

    # Shutdown
    client.close()
    print("🔒 MongoDB Connection Closed")


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend API for NetflixX Streaming Platform",
    version=settings.VERSION,
    lifespan=lifespan,
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to NetflixX API 🚀"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }