const Discord = require('discord.js')

const RollRarity = require('./Rarity')

const req = require('../../../modules/require')


const Client = new req.Discord.Client({
    intents: [3276799],
})

Client.on('ready', (client) => {
    console.log("RarityBot is Ready")
})

Client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    console.log(message.author.globalName)
    RollRarity.RollRarity(message)
})



Client.login(process.env.TokenForRarityBot)