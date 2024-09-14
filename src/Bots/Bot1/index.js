const Discord = require('discord.js');

const MessageReply = require('./MessageReply');
const ReactionLoader = require('./Load/load');
const Reactions = require('./Reaction');
const dotenv = require('dotenv').config()

const reloadcommands = require('./Commands')

const fs = require('fs')





const client = new Discord.Client({ intents: [32767], });  // Adjust intents as needed for your bot's functionality

client.commands = new Discord.Collection();

    let commands = []
    const commandFiles = fs.readdirSync('./src/Bots/Bot1/cmd').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	}
}


client.on('ready', () => {
    console.log('MessageBot ready');
	reloadcommands.ListCommands()
    ReactionLoader.LoadReactions(client);

});

client.on('messageCreate', async (message) => {
    MessageReply.MessageReply(message);
});

client.on('messageReactionAdd', async (reaction, user) => {
    Reactions.ReactionEvent(reaction, user);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});



client.on('disconnect', (event) => {
    console.log(`The client has disconnected with reason: ${event.reason} (Code: ${event.code})`);

});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Gracefully shutting down...');
    client.destroy();  // Clean up resources and logout
    process.exit(0);  // Exit the process
});

// Login to Discord
client.login(process.env.TokenForChatBot);


