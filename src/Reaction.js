const SettingsJSON = require('../.vscode/Settings.json')
const Discord = require('discord.js')


const ReactionRoleEmojis = Object.values(SettingsJSON.Reactions.ReactionRoleEmoji)
const RulesEmoji = Object.values(SettingsJSON.Reactions.RulesReaction)


const ReactionEvent = async (reaction, user) => {
    if (reaction instanceof Discord.MessageReaction && user instanceof Discord.User) {
        
        const ReactionRoleLogChannel = reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRoleLog-Channel'])
        const ReactionRoleChannel = reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRole-Channel'])

        const RulesChannel = reaction.message.guild.channels.cache.get(SettingsJSON.Channels['Rules-Channel'])
        

        if (reaction.message.channelId == ReactionRoleChannel && ReactionRoleEmojis.includes(reaction.emoji.name)) {
            
            console.log(reaction.emoji.name)
            ReactionRoleLogChannel.send(`User: ${user.globalName} with Reaction ${reaction.emoji.name}`)
            
        }

        if (reaction.message.channelId == RulesChannel && RulesEmoji.includes(reaction.emoji.name)) {
            console.log(reaction.emoji.name)
            RulesChannel.send(`User: ${user.globalName} accepted the Rules`)
        }


        
    }      
}

module.exports = {
    ReactionEvent
}

