const Discord = require('discord.js')
const envLoader = require('../../../modules/envLoader')

const RollRarity = require('./Rarity')



const Client = new Discord.Client({
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



Client.login(envLoader.LoadEnvForRarityBot())