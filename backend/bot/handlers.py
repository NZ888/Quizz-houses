from config import bot, dispatcher, id_admins
from aiogram.filters import CommandStart, Command
from aiogram.types import Message

@dispatcher.message(CommandStart())
async def start(message: Message):
    if message.from_user.id in id_admins:
        await message.answer('Hello admin👋')
    else:
        await message.answer('Hello user👋')