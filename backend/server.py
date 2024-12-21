
import asyncio
from flask import Flask, render_template, request, jsonify
from utils.formatter import format_results_as_qa
from bot.config import bot, id_admins  

app = Flask(__name__, template_folder="../frontend/templates", static_folder="../frontend/static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    try:
        data = request.json
        print("Data received:", data)

        message_text = format_results_as_qa(data=data)

        for admin_id in id_admins:
            asyncio.run(bot.send_message(chat_id=admin_id, text=message_text))

        return jsonify({"message": "Data received successfully!"}), 200
    except Exception as e:
        print(f"Processing error /submit: {e}")
        return jsonify({"error": "Failed to process request"}), 500

if __name__ == "__main__":
    app.run(debug=True,use_reloader=False, host="0.0.0.0", port=5000)
