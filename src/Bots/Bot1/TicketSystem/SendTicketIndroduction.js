const Settings = require('../../../../modules/RequireBot1Settings')
const Discord = require('discord.js');

const TicketChannelID = Settings.Channels.CreateTicketChannel
const TicketEmbeds = require('./BuildTickedIntroductionEmbed')

const fs = require('fs');
const { json } = require('express');
const TicketSettings = '.vscode/Bot1Settings/Tickets/Ticket-Settings.json'

const data = fs.readFileSync(TicketSettings, 'utf-8')

let ParsedTicketSettings = JSON.parse(data)

function SendTicketInstructions(Client) {

    if (Client instanceof Discord.Client) {

        
        //get the TickedChannle
        const TicketChannel = Client.channels.cache.get(TicketChannelID)

        if (!ParsedTicketSettings.Settings["Instructions-In-Channel"]) {
            try {

                TicketChannel.send({ embeds: [TicketEmbeds.InstructionEmbed().Embed], components: [TicketEmbeds.InstructionEmbed().Rows] })
                
                //change the Sended Instruction to true to prevent multiple Instrunctions
                ParsedTicketSettings.Settings["Instructions-In-Channel"] = true
                fs.write(TicketSettings, JSON.stringify(ParsedTicketSettings, null, 2))

            } catch (err) {console.error(err)}
        } else {console.warn("Ticketinstruction is already in thhe channel")}
        //send the Embed
        

        

    }

}


module.exports = {SendTicketInstructions}