class Settings:
    PROJECT_NAME: str = "StreamFlix"
    DATABASE_URL: str = "sqlite:///./streamflix.db"
    JWT_SECRET: str = "supersecretkey"  # change in prod
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

settings = Settings()