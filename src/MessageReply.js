const Discord = require('discord.js')
const Rarity = require('./Rarity')

async function MessageReply(message) {
    if (message instanceof Discord.Message) {
        if (message.author.bot) return;
        const args = message.content.split(" ")


        Rarity.RollRarity(message)






    } else {
        console.error('The provided object is not a Discord.Message.');
    }
}

module.exports = {
    MessageReply,
}