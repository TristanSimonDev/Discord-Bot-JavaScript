const Discord = require('discord.js')

module.exports = {
    Name: Discord.Events.MessageCreate,
    Type: 'on',
    EventID: 5,
    async execute(message) {
        if (!(message instanceof Discord.Message)) return;

        
        try {

            console.log(message.constructor.name)

        } catch (err) {console.error(`Error: ${err}`)}
        
       
    }
}