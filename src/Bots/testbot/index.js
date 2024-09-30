const Discord = require('discord.js')
const env = require('dotenv').config()

const fs = require('fs')

const client = new Discord.Client({ intents: [32767] });

const EventFolder = "./Events/"

const EventFiles = fs.readdirSync("src/Bots/testbot/Events").filter(file => file.endsWith('.js'))

for (const file of EventFiles) {
    const Event = require(EventFolder + file)
    console.log(EventFolder + file)
    Event.execute(client)
}





client.login(process.env.TokenForTestBot)
