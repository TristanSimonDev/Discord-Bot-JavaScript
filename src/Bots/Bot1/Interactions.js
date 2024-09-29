const Discord = require('discord.js');
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

async function ButtonInteraction(interaction) {
	console.log(interaction)
	if (interaction instanceof Discord.ButtonInteraction) {

		let Timestamp = Math.floor(Date.now() / 1000)
		let TicketID = GenerateTicketID()

		console.log(interaction.customId)

		const ButtonCommad = require(`./Buttons/${interaction.customId}`)

		if ("execute" in ButtonCommad) {
			try {
				 ButtonCommad.execute(interaction)
			} catch (err) {console.err(err)}
		}
		

		const Types = {
			"ticket-report-bug": ReportBug
		}	
		
		//Choose the Function to deal with

		// for example if the Coustom id is "ticket-report-bug" it will run the function
		//ReportBug because its Selecting Dynamicly : Types[ticket-report-bug] = ReportBug(interaction)
		try {
			await Types[interaction.customId](interaction)
		} catch (error) {console.error(error)}
		


		//first function
		async function ReportBug(interaction) {

			if (interaction instanceof Discord.ButtonInteraction) {
					
				//create channel
				let TicketChannel = await interaction.guild.channels.create({
					name: `ticket_${TicketID}`,
					channels: [{ type: Discord.ChannelType.GuildText }],
					reason: "Bug",
					parent: "1287783226558906471" //Parent is the Channle Category for this it is Support
				})

	
				//create the TicketInfoEmbed
				const TicketEmbed = new Discord.EmbedBuilder() 
					.setTitle(`New Ticket Created`)
					.setDescription(
						`\n\nUser: \`${interaction.user.tag}\`` +
						`\nGlobalName: \`${interaction.user.globalName}\`` +
						`\nUserID: \`${interaction.user.id}\`` +
						`\n\nTickedID: \`${TicketID}\`` +
						`\nTickedChannelID: \`${TicketChannel.id}\`` +
						//get the Timestamp you need to do / 1000 to get the seconds beacause Typpicly you dont want to get the ms
						`\n\nOpend on <t:${Timestamp}>`) 
					.setFooter({ text: `Author: Tristan | S.` })
				
				//If you open a Ticket you get a info Embed in the Created Channel
				const InfoEmbedInTicketChannle = new Discord.EmbedBuilder()
					.setTitle(`Ticket Created\n\nInfo:`)
					.setDescription(
						`\n\nUser: \`${interaction.user.tag}\`` +
						`\nGlobalName: \`${interaction.user.globalName}\`` +
						`\nUserID: \`${interaction.user.id}\`` +
						`\n\nTickedID: \`${TicketID}\`` +
						`\nTickedChannelID: \`${TicketChannel.id}\`` +
						//get the Timestamp you need to do / 1000 to get the seconds beacause Typpicly you dont want to get the ms
						`\n\nOpend on <t:${Timestamp}>` +
						`\n\nOpen Time: <t:${Timestamp}:R>`

					)
					
				//send the TicketInfoEmbed Priveate to the User beacause of emphal
				await interaction.reply({ embeds: [TicketEmbed], ephemeral: true })
				

				//Send the Info Embed in the TicketChannel
				TicketChannel.send({ embeds: [InfoEmbedInTicketChannle] })
					
			}
 		}

	}
}

module.exports = {
	SlashcommandInteraction,
	ButtonInteraction
}