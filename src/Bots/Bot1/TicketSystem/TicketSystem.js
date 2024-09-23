const Settings = require('../../../../modules/RequireBot1Settings')
const Discord = require('../../../../modules/require').Discord

const TicketChannelID = Settings.Channels.CreateTicketChannel

function SendTicketInstructions(Client) {

    if (Client instanceof Discord.Client) {

        //get the TickedChannle
        const TicketChannel = Client.channels.cache.get(TicketChannelID)

        try {

            TicketChannel.send("||hi||")

        } catch (err) {console.error(err)}


    }

}


module.exports = {SendTicketInstructions}