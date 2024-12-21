# QUIZZ-HOUSES

## Overview
QUIZZ-HOUSES is an interactive quiz platform designed to collect user preferences about housing options and send the results to administrators through a Telegram bot. It integrates a Python-based backend with a user-friendly frontend.

---

## Project Structure

```
QUIZZ-HOUSES/
├── backend/
│   ├── bot/
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── handlers.py
│   │   └── main.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── formatter.py
│   │   └── server.py
├── frontend/
│   ├── static/
│   │   ├── css/
│   │   │   ├── reset.css
│   │   │   └── style.css
│   │   ├── images/
│   │   │   ├── bg.png
│   │   │   ├── circle.png
│   │   │   ├── gift.png
│   │   │   ├── image 1.png
│   │   │   ├── image 2.png
│   │   │   └── image 3.png
│   │   └── js/
│   │       └── main.js
│   ├── templates/
│   │   └── index.html
│   └── readme.md
├── venv/
│   ├── Include/
│   ├── Lib/
│   ├── Scripts/
│   └── pyvenv.cfg
└── requirements.txt
```

---

## Installation

### Prerequisites
- Python 3.9+
- Node.js (for frontend development)
- A Telegram bot token

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/quizz-houses.git
   cd quizz-houses
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure the bot:
   - Open `backend/bot/config.py` and replace `Telegram_bot_token` with your Telegram bot token.
   - Add admin Telegram IDs to the `id_admins` list.

5. Start the backend server:
   ```bash
   python backend/utils/server.py
   ```

### Frontend Setup
1. Navigate to the `frontend/` directory.
   ```bash
   cd frontend
   ```
2. Ensure static assets (CSS, JS, images) are in place.

### Run the Application
To ensure full functionality of the application:
1. Start the Flask server:
   ```bash
   python backend/utils/server.py
   ```
2. Start the Telegram bot:
   ```bash
   python backend/bot/main.py
   ```
3. Open `http://127.0.0.1:5000` in your browser.

---

## File Descriptions

### Backend
- **`bot/config.py`**: Contains bot token and admin configuration.
- **`bot/handlers.py`**: Defines Telegram bot commands and message handlers.
- **`bot/main.py`**: Initializes and runs the bot.
- **`utils/formatter.py`**: Formats quiz results for administrators.
- **`utils/server.py`**: Runs the Flask server to serve the frontend and handle API requests.

### Frontend
- **`static/css/`**: Contains styles for the application.
- **`static/js/main.js`**: Handles frontend quiz logic and communicates with the backend.
- **`templates/index.html`**: Main HTML template.
- **`static/images/`**: Images used in the quiz.

---

## API Endpoints

### `POST /submit`
- **Description**: Receives quiz results from the frontend, formats them, and sends them to admin Telegram accounts.
- **Payload**:
  ```json
  {
    "results": [
      "data from the quiz"
    ]
  }
  ```
- **Response**:
  - `200 OK`: Data successfully received and processed.
  - `500 Internal Server Error`: Error during processing.

---

## Multilingual Description

### English
QUIZZ-HOUSES is an interactive quiz platform for collecting and processing user preferences about housing. The platform uses Flask, Telegram Bot API, and a responsive frontend.

### Русский
QUIZZ-HOUSES — это интерактивная платформа для сбора и обработки пользовательских предпочтений относительно домов. Платформа использует Flask, Telegram Bot API и адаптивный фронтенд.

### Polski
QUIZZ-HOUSES to interaktywna platforma do zbierania i przetwarzania preferencji użytkowników dotyczących domów. Platforma korzysta z Flask, Telegram Bot API oraz responsywnego frontendu.

---

## Future Features
1. User authentication.
2. Enhanced reporting.
3. Integration with third-party APIs for real estate data.

---


## Requirements

```
aiofiles==24.1.0
aiogram==3.15.0
aiohappyeyeballs==2.4.4
aiohttp==3.10.11
aiosignal==1.3.2
annotated-types==0.7.0
async-timeout==5.0.1
attrs==24.3.0
blinker==1.9.0
certifi==2024.12.14
click==8.1.7
colorama==0.4.6
Flask==3.1.0
frozenlist==1.5.0
idna==3.10
itsdangerous==2.2.0
Jinja2==3.1.4
magic-filter==1.0.12
MarkupSafe==3.0.2
multidict==6.1.0
propcache==0.2.1
pydantic==2.9.2
pydantic_core==2.23.4
typing_extensions==4.12.2
Werkzeug==3.1.3
yarl==1.18.3
```

