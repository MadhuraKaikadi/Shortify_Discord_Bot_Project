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

import { Client, GatewayIntentBits } from 'discord.js';


const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate',(message)=>{
  // console.log(message.content);
  // console.log(message);
if(message.author.bot) return;
if(message.content.startsWith("create")){
  const url = message.content.split("create")[1]
  return message.replay({
    content: " Generating Short ID for " + url,
  })
}
  message.replay({
    content:"hi from bot",
  })
  

});
client.login(process.env.TOKEN)
client.on("interactionCreate",interaction =>{
  console.log(interaction);
  interaction.replay("pong!!")
})