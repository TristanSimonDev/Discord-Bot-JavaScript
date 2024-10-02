const Discord = require('discord.js')

const ReactionEvent = require('../Reaction')

module.exports = {
    Name: Discord.Events.MessageReactionAdd,
    Type: 'on',
    EventID: 3,
    async execute(reaction, user) {

        
        try {

            await ReactionEvent.ReactionEvent(reaction, user)

        } catch (err) {console.error(`Error: ${err}`)}
        
       
    }
}