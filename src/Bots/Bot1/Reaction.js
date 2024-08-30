const SettingsJSON = require('../../../.vscode/BotSettings/Settings.json')
const Discord = require('discord.js')


const ReactionRoleEmojis = Object.values(SettingsJSON.Reactions.ReactionRoleEmoji)
const RulesEmoji = Object.values(SettingsJSON.Reactions.RulesReaction)


const ReactionEvent = async (reaction, user) => {
    if (reaction instanceof Discord.MessageReaction && user instanceof Discord.User) {
        
        const Channels = {
            ReactionRoleLogChannel: reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRoleLog-Channel']),
            ReactionRoleChannel: reaction.message.guild?.channels.cache.get(SettingsJSON.Channels['ReactionRole-Channel']),
            RulesChannel: reaction.message.guild.channels.cache.get(SettingsJSON.Channels['Rules-Channel']),
        }
        class ReactionEnvent {
            static ReactionRoleEmojis = () => {
                if (reaction.message.channelId == Channels.ReactionRoleChannel && ReactionRoleEmojis.includes(reaction.emoji.name)) {
                    console.log(reaction.emoji.name)
                    Channels.ReactionRoleLogChannel.send(`User: ${user.globalName} with Reaction ${reaction.emoji.name}`)
                }
            }

            static RulesEmojis = () => {
                if (reaction.message.channelId == Channels.RulesChannel && RulesEmoji.includes(reaction.emoji.name)) {
                    console.log(reaction.emoji.name)
                    Channels.RulesChannel.send(`User: ${user.globalName} accepted the Rules`)
                }
                
            }
        }
        
        const EventFunctions = [
            ReactionEnvent.ReactionRoleEmojis(),
            ReactionEnvent.RulesEmojis()
        ]
        
        EventFunctions.forEach(element => {});
        
        
    
      
        
   
    }      
}



module.exports = {
    ReactionEvent
}

