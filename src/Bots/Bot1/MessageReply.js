const Discord = require('discord.js')
const fs = require('fs')

const DataBaseCalculation = require('../../../.vscode/DB/Calculation')

// Data Pat

async function MessageReply(message) {
    if (message instanceof Discord.Message) {
        if (message.author.bot) return;
        const args = message.content.split(" ")

        DataBaseCalculation.DataBase(message)
        
    } else {
        console.error('The provided object is not a Discord.Message.');
    }
}

module.exports = {
    MessageReply,
}