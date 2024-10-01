const Discord = require('discord.js')

const TicketInstruction = require('../Ticket-Instructions')
const reloadcommands = require('../Commands')
const ReactionLoader = require('../Load/load')



module.exports = {
    Name: Discord.Events.ClientReady,
    Type: 'on',
    async execute(client) {
        
        if (!(client instanceof Discord.Client)) return;

        console.log("Client ready")
        
        TicketInstruction.InstructionEmbed(client)
    
        reloadcommands.ListCommands()
    
        ReactionLoader.LoadReactions(client)
        
        
    }
}
    