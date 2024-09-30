const { error } = require('console');
const Discord = require('discord.js')
const env = require('dotenv').config()

const fs = require('fs')

const client = new Discord.Client({ intents: [32767] });

const EventFolder = "./Events/"

const EventFiles = fs.readdirSync("src/Bots/testbot/Events").filter(file => file.endsWith('.js'))

for (const file of EventFiles) {
    const Event = require(EventFolder + file)
    console.log(EventFolder + file)
    try {
        Event.Type == 'once' ? client.once(Event.name, (...args) => Event.execute(...args)) : client.on(Event.name, (...args) => Event.execute(...args))
    } catch (err) {console.error(`Error: ${err}`)}
    
}





client.login(process.env.TokenForTestBot)
