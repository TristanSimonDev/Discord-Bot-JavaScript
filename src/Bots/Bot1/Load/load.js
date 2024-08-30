const Discord = require('discord.js');
const SettingsJSON = require('../../../../.vscode/BotSettings/Settings.json')

const emojis = Object.values(SettingsJSON.Reactions.ReactionRoleEmoji);

const LoadReactions = async (Client) => {
    
    if (Client instanceof Discord.Client) {

        
        const reactionRoleChannel = Client.channels.cache.get(SettingsJSON.Channels['ReactionRole-Channel']);
             class LoadMessageWithReaction {
                    static LoadReactionRoleEmojis = async () => {
                        if (reactionRoleChannel instanceof Discord.TextChannel) { 
                            const message = await reactionRoleChannel.messages.fetch(SettingsJSON.Messages['ReactionRole-Message']);
                            const reactions = message.reactions.cache

                            reactions.forEach(async reaction => {
                                console.log(`Reaction: ${reaction.emoji.name}, Count: ${reaction.count}`);
                            });
                
                            for (const emoji of emojis) {
                                await message.react(emoji);
                            } 

                        }
                    }                    

                              
                 }
            
        

        LoadMessageWithReaction.LoadReactionRoleEmojis()
    } 
};





module.exports = {
    LoadReactions
};
