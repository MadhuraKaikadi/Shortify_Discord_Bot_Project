🤖 Discord URL Shortener Bot

📌 Overview

This project is a Discord bot built using Node.js and discord.js. It allows users to shorten long URLs into unique short IDs and retrieve them later using commands. The bot also supports basic conversational responses and stores data persistently using MongoDB Atlas.

---

🚀 Features

- 🔗 Shorten long URLs into unique IDs
- 📥 Retrieve original URLs using short IDs
- 💬 Basic human-like chat responses (hi, hello, etc.)
- ⚡ Real-time message handling using Discord API
- 🗄️ Persistent storage using MongoDB Atlas

---

🛠️ Tech Stack

- Node.js
- discord.js
- MongoDB Atlas
- Mongoose
- dotenv

---

⚙️ How It Works

1. User sends a command in Discord:
   
   !create https://example.com

2. Bot generates a short ID and stores it in MongoDB:
   
   ID: abc123

3. User retrieves the original URL:
   
   !get abc123

4. Bot responds with:
   
   https://example.com

---

💡 Example Usage

User:

!create https://amazon.com/product/xyz

Bot:

🔗 URL Shortened!
Original: https://amazon.com/product/xyz
ID: k9x2ab

User:

!get k9x2ab

Bot:

🔗 https://amazon.com/product/xyz

---

🔧 Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/discord-url-bot.git
cd discord-url-bot

2. Install dependencies

npm install

3. Create ".env" file

TOKEN=your_discord_bot_token
MONGO_URI=your_mongodb_connection_string

4. Run the bot

node index.js

---

📂 Project Structure

📁 Discord_Bot
 ┣ 📄 index.js
 ┣ 📄 package.json
 ┣ 📄 .env
 ┗ 📄 README.md

---

⚠️ Important Notes

- Ensure MongoDB Atlas IP access is enabled ("0.0.0.0/0")
- Keep your ".env" file secure and never upload it to GitHub
- Add ".env" and "node_modules/" to ".gitignore"

---

🔮 Future Improvements

- 📊 URL analytics (click tracking)
- 👤 User authentication
- 🔗 Custom short links
- 🌐 Web dashboard interface

---

👩‍💻 Author

Madhura Kaikadi

---

⭐ Acknowledgements

- Discord Developer Platform
- MongoDB Atlas
- Open-source community
