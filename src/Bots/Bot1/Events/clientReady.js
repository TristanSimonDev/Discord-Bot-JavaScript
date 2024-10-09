const Discord = require("discord.js");

const TicketInstruction = require("../Ticket-Instructions");
const reloadcommands = require("../Commands");
const ReactionLoader = require("../Load/load");

const webhook = require("../Stats-WebHook/Stats-total");

module.exports = {
    Name: Discord.Events.ClientReady,
    Type: "on",
    EventID: 1,
    async execute(client) {
        if (!(client instanceof Discord.Client)) return;

        try {
            
            await Promise.all([
                console.log("Client ready"),
    
                TicketInstruction.InstructionEmbed(client),
    
                reloadcommands.ListCommands(),
    
                ReactionLoader.LoadReactions(client)
            ])
            setInterval(webhook.updateStatsEmbed, 10000);

        } catch (err) {console.error(err)}
        
        

        

        
    },
};
