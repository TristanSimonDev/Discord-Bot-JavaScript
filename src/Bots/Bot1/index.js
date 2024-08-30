const Discord = require('discord.js');

const MessageReply = require('./MessageReply');
const envLoader = require('../../../modules/envLoader');
const ReactionLoader = require('./Load/load');
const Reactions = require('./Reaction');

const client = new Discord.Client({
    intents: [3276799],  // Adjust intents as needed for your bot's functionality
});


client.on('ready', () => {
    console.log('Discord client ready');
   

    // Uncomment these lines if you want to load reactions and slash commands
    // ReactionLoader.LoadReactions(client);
});

client.on('messageCreate', async (message) => {
    MessageReply.MessageReply(message);
});

client.on('messageReactionAdd', async (reaction, user) => {
    Reactions.ReactionEvent(reaction, user);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
     
    if (interaction.commandName === 'ping') {
        interaction.reply({
            content: 'Pong!',
        })
    }
})


client.on('disconnect', (event) => {
    console.log(`The client has disconnected with reason: ${event.reason} (Code: ${event.code})`);

});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Gracefully shutting down...');
    client.destroy();  // Clean up resources and logout
    process.exit(0);  // Exit the process
});

// Login to Discord
client.login(envLoader.LoadEnvForChatBot());
