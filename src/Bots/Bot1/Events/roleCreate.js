const Discord = require('discord.js')

module.exports = {
    Name: Discord.Events.GuildRoleCreate,
    Type: 'on',
    EventID: 4,

    async execute(CreatedRole) {
        if (!(CreatedRole instanceof Discord.Role)) return;
        console.log()
    }
}