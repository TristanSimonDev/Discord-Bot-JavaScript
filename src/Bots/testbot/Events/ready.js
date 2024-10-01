const Discord = require('discord.js')
const { once } = require('ws')

module.exports = {
    name: Discord.Events.ClientReady,
    Type: 'once',
    async execute(client) {
        console.log("test")
    }
}