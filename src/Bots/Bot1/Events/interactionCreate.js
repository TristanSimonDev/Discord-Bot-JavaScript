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
            "ButtonInteraction": interactions.ButtonInteraction(interaction) & counter.increaseTotalButtonInteractionsCounter(),

            //Slashcommand
            "ChatInputCommandInteraction": interactions.SlashcommandInteraction(interaction) & counter.increaseSlashcommandCounter()
            
        }


        try {

            await InteractionTypes[interaction]

        } catch (err) {console.error(`Error: ${err}`)}

    }
}
    