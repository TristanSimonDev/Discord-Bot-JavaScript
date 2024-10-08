const Discord = require('discord.js')

const Counter = require('../Stats-WebHook/Counters')

module.exports = {
    Name: Discord.Events.MessageCreate,
    Type: 'on',
    EventID: 5,
    async execute(message) {
        if (!(message instanceof Discord.Message)) return;

        
        try {

            Counter.increaseStatCounters(message.constructor.name)

            console.log(message.constructor.name)

        } catch (err) {console.error(`Error: ${err}`)}
        
       
    }
}