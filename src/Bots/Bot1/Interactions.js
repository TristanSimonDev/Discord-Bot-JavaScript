const Discord = require('discord.js');


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

async function ButtonInteraction(interaction) {

	if (interaction instanceof Discord.ButtonInteraction) {

		console.log(interaction.customId)

		const ButtonCommad = await require(`./Buttons/${interaction.customId}`)

		if ("execute" in ButtonCommad) {
			try {
				await ButtonCommad.execute(interaction)
			} catch (err) {console.error(err)}
		}

	}
}

module.exports = {
	SlashcommandInteraction,
	ButtonInteraction
}