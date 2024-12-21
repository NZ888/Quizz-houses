import aiogram
from config import dispatcher, bot
import asyncio
import handlers

async def main():
    try:
        print("Bot is starting")
        await dispatcher.start_polling(bot)
    except KeyboardInterrupt:
        print("Bot stopped")

if __name__ == "__main__":
    asyncio.run(main())