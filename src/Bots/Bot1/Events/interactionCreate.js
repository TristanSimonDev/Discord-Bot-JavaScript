const Discord = require('discord.js')

const interactions = require('../Interactions') 
    
const counter = require('../Connection/Counters/Counters')

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
        console.log(interaction.constructor.name)
        try {
            await counter["increaseTotal" + interaction.constructor.name + "Counter"]()
            
            await InteractionTypes[interaction]

        } catch (err) {console.error(`Error: ${err}`)}

    }
}
    