const SettingsJSON = require('../../../.vscode/BotSettings/Settings.json')
const Discord = require('discord.js')


const ReactionRoleEmojis = Object.values(SettingsJSON.Reactions.ReactionRoleEmoji)
const RulesEmoji = Object.values(SettingsJSON.Reactions.RulesReaction)


const ReactionEvent = async (reaction, user) => {
    if (reaction instanceof Discord.MessageReaction && user instanceof Discord.User) {

        console.log(reaction)
        
        const Channels = {
            ReactionRoleLogChannel: reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRoleLog-Channel']),
            ReactionRoleChannel: reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRole-Channel']),
            RulesChannel: reaction.message.guild.channels.cache.get(SettingsJSON.Channels['Rules-Channel']),
        }


        let ReactionEvents = {
            "✅": (reaction.message.channelId == Channels.RulesChannel && RulesEmoji.includes(reaction.emoji.name)) ? 
                Channels.RulesChannel.send(`User: ${user.globalName} accepted the Rules`) && console.log(reaction.emoji.name) : console.error("An error on RulesReaction"),

            ReactionRoleEmojis: reaction.message.channelId == Channels.ReactionRoleChannel && ReactionRoleEmojis.includes(reaction.emoji.name) ?
                Channels.ReactionRoleLogChannel.send(`User: ${user.globalName} with Reaction ${reaction.emoji.name}`) && console.log(reaction.emoji.name) : ""
                
        }

        //run the reactionEvent dynamicly with the help of the ReactionEvents
        ReactionEvents[reaction.emoji.name]
        
        
    
      
        
   
    }      
}



module.exports = {
    ReactionEvent
}

