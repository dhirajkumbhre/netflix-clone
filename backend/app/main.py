from fastapi import FastAPI

app = FastAPI(
    title="NetflixX API",
    description="Backend API for NetflixX Streaming Platform",
    version="1.0.0"
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