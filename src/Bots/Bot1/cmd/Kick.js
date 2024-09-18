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
            const User = await interaction.guild.members.fetch(TargetID)
            console.log(TargetID)
            const KickEmbed = new Discord.EmbedBuilder()
                .setTitle(`User got Kicked ${Emojis.Flag}`)
                .setDescription(
                    `\nUser: \`${User.displayName}\`` +
                    `\nNickmame: \`${User.user.tag}\`` +
                    `\nID: \`${User.id}\`` 

                )

            interaction.reply({ embeds: [KickEmbed] });
            interaction.guild.members.kick(TargetID)
        }
    }
}