const Settings = require('../../../../modules/RequireBot1Settings')
const Discord = require('discord.js');

const TicketChannelID = Settings.Channels.CreateTicketChannel
const TicketEmbeds = require('./BuildTickedIntroductionEmbed')

const fs = require('fs');
const TicketSettings = '.vscode/Bot1Settings/Tickets/Ticket-Settings.json'

const data = fs.readFileSync(TicketSettings, 'utf-8')

let ParsedTicketSettings = JSON.parse(data)

async function SendTicketInstructions(Client) {

    if (Client instanceof Discord.Client) {

        
        //get the TicketChannle
        const TicketChannel = Client.channels.cache.get(TicketChannelID)

    
     

        let SendedInstructions = await TicketChannel.send({
            embeds: [TicketEmbeds.InstructionEmbed().Embed],
            components: [TicketEmbeds.InstructionEmbed().Rows],
        })

        console.log(SendedInstructions.id)

        

        

    }

}


module.exports = {SendTicketInstructions}