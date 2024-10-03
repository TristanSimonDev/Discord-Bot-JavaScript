const Discord = require('discord.js')
const GenerateTicketID = require('../functions/Keys').GenerateTicketKey

module.exports = {
    async execute(interaction) {
        if (interaction instanceof Discord.ButtonInteraction) {

            let Timestamp = Math.floor(Date.now() / 1000)
		    let TicketID = GenerateTicketID()
					
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