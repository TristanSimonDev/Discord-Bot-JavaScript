const Discord = require('discord.js')

module.exports = {
    name: Discord.Events.ClientReady,
    Type: 'once',
    async execute(client) {
        console.log("test")
    }
}