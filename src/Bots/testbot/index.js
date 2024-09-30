const Discord = require('discord.js')
const env = require('dotenv').config()

const client = new Discord.Client({ intents: [32767] });

client.on('ready', client => {
    console.log(`${client.user.displayName} is ready`)
})

//console.log(Object.values(Discord.Events))

client.login(process.env.TokenForTestBot)