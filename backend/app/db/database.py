"""
====================================================

MongoDB Database Connection

Purpose:
- Connect to MongoDB Atlas
- Select the database
- Make the database available throughout the project

====================================================
"""

from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

# Create MongoDB client
client = AsyncIOMotorClient(settings.MONGODB_URL)

# Select database
db = client[settings.DATABASE_NAME]