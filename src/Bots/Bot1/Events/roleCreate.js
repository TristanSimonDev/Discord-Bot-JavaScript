const Discord = require('discord.js')
const { execute } = require('./ReactionAdd')

module.exports = {
    Name: Discord.Events.GuildRoleCreate,
    Type: 'on',
    EventID: 4,

    async execute(CreatedRole) {
        if (!(CreatedRole instanceof Discord.Role)) return;
        console.log(CreatedRole.id)
    }
}