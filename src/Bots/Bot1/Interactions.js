const Discord = require('discord.js');
const channels = require('../../../.vscode/Bot1Settings/channels.json')
const GenerateTicketID = require('../../../functions/Keys').GenerateTicketKey
const fs = require('fs');
let TicketChannels = '.vscode/Bot1Settings/Tickets/TicketChannels.json'

const data = fs.readFileSync(TicketChannels, 'utf-8')

const ParsedTicketChannels = JSON.parse(data)

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


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
		
		//Choose the Function to deal with
		Types[interaction.customId]


		//first function
		async function ReportBug(interaction) {
			if (interaction instanceof Discord.ButtonInteraction) {
				
				//create channel
				let TicketChannel = await interaction.guild.channels.create({
					name: `ticket_${TicketID}`,
					channels: [{ type: Discord.ChannelType.GuildText }],
					reason: "Bug",
					parent: "1287783226558906471"
				})
				
				//create Embed
				const TicketEmbed = new Discord.EmbedBuilder() 
					.setTitle(`New Ticket Created`)
					.setDescription(
						`\n\nUser: \`${interaction.user.tag}\`` +
						`\nGlobalName: \`${interaction.user.globalName}\`` +
						`\nUserID: \`${interaction.user.id}\`` +
						`\n\nTickedID: \`${TicketID}\`` +
						`\nTickedChannelID: \`${TicketChannel.id}\`` +
						//get the Timestamp you need to do / 1000 to get the seconds beacause Typpicly you dont want to get the ms
						`\n\nOpend on <t:${Math.floor(Date.now() / 1000)}>`) 
					.setFooter({text: `Author: Tristan | S.`})
					
				
				//write json
				ParsedTicketChannels[TicketID] = TicketID
				//send the TicketInfoEmbed
				let ReplyWithTicketInfoEmbed = await interaction.reply({ embeds: [TicketEmbed] })
				//wait 5 seconds
				await sleep(5000)
				//Delete the TicketInfoEmbed
				ReplyWithTicketInfoEmbed.delete()
				

				fs.writeFileSync(TicketChannels, JSON.stringify(ParsedTicketChannels, null, 2), 'utf-8');
			}
 		}

	}
}

module.exports = {
	SlashcommandInteraction,
	TicketButtonInteraction
}