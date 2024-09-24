const Discord = require('discord.js');
const channels = require('../../../.vscode/Bot1Settings/channels.json')


async function SlashcommandInteraction(interaction) {
    if (interaction instanceof Discord.ChatInputCommandInteraction) {

        const command = interaction.client.commands.get(interaction.commandName);
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
    }
}

async function TicketButtonInteraction(interaction) {
	if (interaction instanceof Discord.ButtonInteraction && interaction.channelId == channels.CreateTicketChannel) {
		console.log("why")
	}
}

module.exports = {
	SlashcommandInteraction,
	TicketButtonInteraction
}