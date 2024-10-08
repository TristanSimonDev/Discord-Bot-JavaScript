const Discord = require('discord.js')

const interactions = require('../Interactions') 
    
const counter = require('../Stats-WebHook/Counters')

module.exports = {
    Name: Discord.Events.InteractionCreate,
    Type: 'on',
    EventID: 2,
    
    async execute(interaction) {

        let InteractionTypes = {   
            //ButtomInteraction
            "ButtonInteraction": interactions.ButtonInteraction(interaction),

            //Slashcommand
            "ChatInputCommandInteraction": interactions.SlashcommandInteraction(interaction)   
        }


        try {
            
            counter.increaseStatCounters(interaction.constructor.name)
        
            await InteractionTypes[interaction.constructor.name]

        } catch (err) {console.error(`Error: ${err}`)}

    }
}
    