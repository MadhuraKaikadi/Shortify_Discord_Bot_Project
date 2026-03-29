import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'creat',
    description: 'Create a new short URL',
  },
];
const rest = new REST({ version: '10' })..setToken(process.env.TOKEN);
(async () => {
  try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1462367176223756371"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();