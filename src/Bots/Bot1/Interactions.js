const Discord = require('discord.js');
const channels = require('../../../.vscode/Bot1Settings/channels.json')
const GenerateTicketID = require('../../../functions/Keys').GenerateTicketKey



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
	let TicketID = GenerateTicketID()
	if (interaction instanceof Discord.ButtonInteraction && interaction.channelId == channels.CreateTicketChannel) {
		
		const Types = {
			"ticket-report-bug": ReportBug(interaction)
		}	
		
		Types[interaction.customId]

		async function ReportBug(interaction) {
			
			if (interaction instanceof Discord.ButtonInteraction) {

				let TicketChannel = await interaction.guild.channels.create({
					name: `ticket_${TicketID}`,
					channels: [{ type: Discord.ChannelType.GuildText }],
					reason: "Bug",
					parent: "1287783226558906471"
				})
		

				const TicketEmbed = new Discord.EmbedBuilder() 
					.setTitle(`New Ticket Created`)
					.setDescription(
						`\n\nUser: \`${interaction.user.tag}\`` +
						`\nGlobalName: \`${interaction.user.globalName}\`` +
						`\nUserID: \`${interaction.user.id}\`` +
						`\n\nTickedID: \`${TicketID}\`` +
						`\nTickedChannelID: \`${TicketChannel.id}\``
					)

				interaction.reply({ embeds: [TicketEmbed] })
			}
 		}

	}
}

module.exports = {
	SlashcommandInteraction,
	TicketButtonInteraction
}