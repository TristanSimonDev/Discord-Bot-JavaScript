const Discord = require('discord.js')
const env = require('dotenv').config()
const path = require('path')

const fs = require('fs')

const client = new Discord.Client({ intents: [32767] });

const EventFolder = "./Events/"

const EventFiles = fs.readdirSync("src/Bots/testbot/Events").filter(file => file.endsWith('.js'))

for (const file of EventFiles) {

    console.log(path.join(EventFolder, file))

    let Event = require(EventFolder + file)

    
    try {
        
        client[Event.Type](Event.name, (...args) => Event.execute(...args))
        
    } catch (err) {console.error(`Error: ${err}`)}
    
}





client.login(process.env.TokenForTestBot)
