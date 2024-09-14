const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
const dotenv = require('dotenv').config()


let commands = []
const commandFiles = fs.readdirSync('./src/Bots/Bot1/cmd').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	if ('data' in command && 'execute' in command) {
		commands.push(command.data.toJSON());
	}
}

const rest = new REST().setToken(process.env.TokenForChatBot);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(process.env.ClientID, process.env.GuildID),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();