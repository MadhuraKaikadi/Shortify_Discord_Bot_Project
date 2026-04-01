// // ## Discord Bot Setup Process

// // 1. Create a Discord account and verify it.
// // 2. Create a new server (for example: "Madhu's Server").
// // 3. Go to the Discord Developer Portal and log in.
// // 4. Create a new application and add a bot to it.
// // 5. In the bot settings, enable the "Message Content Intent" option.
// // 6. Go to the OAuth2 section and generate a URL.
// // 7. Copy the generated URL and open it in a browser.
// // 8. Select your server and add the bot to it.
// // 9. Once added, the bot will be ready to communicate with your Discord server.

// // hi process aahe varchi steps follow karun bot setup karayla. Nantar, index.js file madhe code lihun bot la functionality dya. Command.js file madhe slash commands setup karayla. Bot la run karayla, terminal madhe `node index.js` command chalva. Bot online zalyavar, Discord server madhe jaaun commands test kara.

// import 'dotenv/config';
// import { Client, GatewayIntentBits } from 'discord.js';
// // import mongoose from "mongoose";



// // // ✅ MongoDB connect
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB Connected"))
// //   .catch(err => console.log("❌ DB Error:", err));

// // Create bot client
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent
//   ]
// });

// // Temporary database
// const urlDatabase = {};

// // Bot ready
// client.on('ready', () => {
//   console.log(`✅ Bot is Online as ${client.user.tag}`);
// });

// // Message event
// client.on('messageCreate', (message) => {
//   if (message.author.bot) return;

//   const msg = message.content.toLowerCase().trim();

//   console.log("📤 SEND:", msg);

//   let reply = "";

//   // ================= HUMAN CHAT =================
//   if (msg.includes("hi") || msg.includes("hello")) {
//     reply = "Hey! 😊";
//   } 
//   else if (msg.includes("how are you")) {
//     reply = "I'm doing great! How about you?";
//   } 
//   else if (msg.includes("bye")) {
//     reply = "Bye! Take care 👋";
//   }

//   // ================= COMMANDS =================
//   else if (msg === "!help") {
//     reply = "Commands:\n!help\n!ping\n!create <url>\n!get <id>";
//   }

//   else if (msg === "!ping") {
//     reply = "🏓 Pong!";
//   }

//   // ================= CREATE =================
//  else if (msg.startsWith("!create")) {
//   let url = msg.replace("!create", "").trim();

//   if (!url) {
//     reply = "❌ Please provide a URL";
//   } else {
//     // 🔥 IMPORTANT LINE (add https)
//     if (!url.startsWith("http")) {
//       url = "https://" + url;
//     }

//     const id = Math.random().toString(36).substring(2, 7);
//     urlDatabase[id] = url;

//     reply =
//       `🔗 URL Shortened!\n` +
//       `Original: ${url}\n` +
//       `ID: ${id}`;
//   }
// }
//   // ================= GET =================
//   else if (msg.startsWith("!get")) {
//   const id = msg.replace("!get", "").trim();

//   const url = urlDatabase[id];

//   if (!url) {
//     reply = "❌ URL not found";
//   } else {
//     reply = `🔗 ${url}`; // already clickable now
//   }
// }
//   // ================= DEFAULT =================
//   else {
//     reply = "I didn’t understand 🤔 Try !help";
//   }

//   console.log("📥 RECEIVED:", reply);

//   message.reply(reply);
// });

// // Login bot
// client.login(process.env.TOKEN);







// ## Discord Bot Setup Process

// 1. Create a Discord account and verify it.
// 2. Create a new server (for example: "Madhu's Server").
// 3. Go to the Discord Developer Portal and log in.
// 4. Create a new application and add a bot to it.
// 5. In the bot settings, enable the "Message Content Intent" option.
// 6. Go to the OAuth2 section and generate a URL.
// 7. Copy the generated URL and open it in a browser.
// 8. Select your server and add the bot to it.
// 9. Once added, the bot will be ready to communicate with your Discord server.

// hi process aahe varchi steps follow karun bot setup karayla. Nantar, index.js file madhe code lihun bot la functionality dya. Command.js file madhe slash commands setup karayla. Bot la run karayla, terminal madhe `node index.js` command chalva. Bot online zalyavar, Discord server madhe jaaun commands test kara.

import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import mongoose from "mongoose";

// ✅ MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Create URL Schema
const urlSchema = new mongoose.Schema({
  shortId: String,
  originalUrl: String
});

const URL = mongoose.model("URL", urlSchema);

// Create bot client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot ready - Fixed deprecation warning (using clientReady instead of ready)
client.on('clientReady', () => {
  console.log(`✅ Bot is Online as ${client.user.tag}`);
});

// Message event - Made async for database operations
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase().trim();

  console.log("📤 SEND:", msg);

  let reply = "";

  // ================= HUMAN CHAT =================
  if (msg.includes("hi") || msg.includes("hello")) {
    reply = "Hey! 😊";
  } 
  else if (msg.includes("how are you")) {
    reply = "I'm doing great! How about you?";
  } 
  else if (msg.includes("bye")) {
    reply = "Bye! Take care 👋";
  }

  // ================= COMMANDS =================
  else if (msg === "!help") {
    reply = "Commands:\n!help\n!ping\n!create <url>\n!get <id>";
  }

  else if (msg === "!ping") {
    reply = "🏓 Pong!";
  }

  // ================= CREATE =================
  else if (msg.startsWith("!create")) {
    let url = msg.replace("!create", "").trim();

    if (!url) {
      reply = "❌ Please provide a URL";
    } else {
      // 🔥 IMPORTANT LINE (add https)
      if (!url.startsWith("http")) {
        url = "https://" + url;
      }

      const id = Math.random().toString(36).substring(2, 8);

      // 🔥 SAVE TO DB
      await URL.create({
        shortId: id,
        originalUrl: url
      });

      reply =
        `🔗 URL Shortened!\n` +
        `Original: ${url}\n` +
        `ID: ${id}`;
    }
  }
  
  // ================= GET =================
  else if (msg.startsWith("!get")) {
    const id = msg.replace("!get", "").trim();

    // 🔥 FETCH FROM DB
    const data = await URL.findOne({ shortId: id });

    if (!data) {
      reply = "❌ URL not found";
    } else {
      reply = `🔗 ${data.originalUrl}`;
    }
  }
  
  // ================= DEFAULT =================
  else {
    reply = "I didn’t understand 🤔 Try !help";
  }

  console.log("📥 RECEIVED:", reply);

  message.reply(reply);
});

// Login bot
client.login(process.env.TOKEN);