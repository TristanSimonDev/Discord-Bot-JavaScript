const Discord = require('discord.js')
const fs = require('fs')

const DataBaseCalculation = require('../../../.vscode/DB/DataCalculation')

// Data Pat

async function MessageReply(message) {
    if (message instanceof Discord.Message) {
        if (message.author.bot) return;

        const args = message.content.split(" ")

        DataBaseCalculation.DataBase(message)


        
        
    }
}

module.exports = {
    MessageReply,
}