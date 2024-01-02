import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE5MTQxODY1MTcyMzcxNDY4MA.GDssP4.7Y8K_PdV_FIbx85Li6aWrLuBIelB02KpGemWgs");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1191418651723714680"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}