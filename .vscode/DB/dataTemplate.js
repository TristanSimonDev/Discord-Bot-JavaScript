const Discord = require('discord.js')

function dataTemplate(message) {
    if (message instanceof Discord.Message) {
        let Template = {
            MessageBot: {
                LevelTab: {
                    xp: 0,
                    level: 1,
                    ReqXP: 5,
                },
                UserInfo: {
                    ID: message.author.id,
                    GlobalName: message.author.globalName,
                    NameTag: message.author.tag,
                },
            },
            RarityBot: {
                Luck: 1,
                Bulk: 1,
            },
        };
        return Template
    }
}
    
module.exports = {dataTemplate}