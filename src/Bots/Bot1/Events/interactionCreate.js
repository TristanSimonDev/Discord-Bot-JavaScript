const Discord = require('discord.js')

const interactions = require('../Interactions')

module.exports = {
    Name: Discord.Events.InteractionCreate,
    Type: 'on',
    EventID: 2,
    
    async execute(interaction) {

        let InteractionTypes = {
            "ButtonInteraction": interactions.ButtonInteraction(interaction),
            "ChatInputCommandInteraction": interactions.SlashcommandInteraction(interaction) //Slashcommand
        }


        try {

            await InteractionTypes[interaction]

        } catch (err) {console.error(`Error: ${err}`)}

    }
}
    