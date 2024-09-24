const Settings = require('../../../../modules/RequireBot1Settings')
const Discord = require('discord.js');

const TicketChannelID = Settings.Channels.CreateTicketChannel

const TicketEmbeds = require('./TicketEmbed')

function SendTicketInstructions(Client) {

    if (Client instanceof Discord.Client) {

        
        //get the TickedChannle
        const TicketChannel = Client.channels.cache.get(TicketChannelID)

        try {

            TicketChannel.send({ embeds: [TicketEmbeds.InstructionEmbed().Embed], components: [TicketEmbeds.InstructionEmbed().Rows]  })

        } catch (err) {console.error(err)}

    }

}


module.exports = {SendTicketInstructions}