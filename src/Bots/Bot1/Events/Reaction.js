const Discord = require('discord.js')

const ReactionEvent = require('../Reaction')

module.exports = {
    Name: Discord.Events.MessageReactionAdd,
    Type: 'on',

    async execute(reaction, user) {
        
        ReactionEvent.ReactionEvent(reaction, user)

    }
}