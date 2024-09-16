const Discord = require('../../../../modules/require').Discord
const Emojis = require('../../../../modules/RequireBot1Settings').Emojis

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("kick")
        .setDescription("kick a user from the Server")
        .addStringOption(option =>
            option
                .setName("target")
                .setDescription("The User that you want to kick (ID)")
                .setRequired(true)
        ),
    
    
    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            const TargetID = interaction.options.get("target").value

            interaction.reply(`${await interaction.guild.members.fetch(TargetID).user.tag} got Kicked from the Server ${Emojis.Sroll}`)
            interaction.guild.members.kick(TargetID)
        }
    }
}