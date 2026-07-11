import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings


async def main():
    try:
        client = AsyncIOMotorClient(settings.MONGODB_URL)

        info = await client.server_info()

        print("✅ Connected to MongoDB Atlas")
        print(info)

    except Exception as e:
        print("❌ Connection failed:")
        print(e)


asyncio.run(main())