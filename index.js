import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate', message=> {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split("create") [1];
        return message.reply({
            content:"Generating Short ID for "+ url,
        });
    }
    message.reply({
        content:"Hi from Bot"
    })


});

client.on('interactionCreate',(interaction) =>{
    console.log(interaction)
    interaction.reply("Woila");

})
client.login("MTE5MTQxODY1MTcyMzcxNDY4MA.GDssP4.7Y8K_PdV_FIbx85Li6aWrLuBIelB02KpGemWgs")

