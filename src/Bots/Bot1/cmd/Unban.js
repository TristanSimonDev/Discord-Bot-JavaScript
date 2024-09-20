const Discord = require('../../../../modules/require').Discord
const Emojis = require('../../../../modules/RequireBot1Settings').Emojis

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("unban")
        .setDescription("unban a user from the Server")
        .addStringOption(option =>
            option
                .setName("target")
                .setDescription("The User that you want to unban (ID)")
                .setRequired(true)
    )
        .addStringOption(option => 
            option
                .setName("reason")
                .setDescription("The Reason why you want to unban")
                .setRequired(false)
        ),
    
    
    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            const TargetID = interaction.options.get("target").value
            const User = await interaction.client.users.fetch(TargetID)
            const Reason = interaction.options.get("Reason") ? interaction.options.get("Reason").value : "No Reason Provided"

            const UnbanEmbed = new Discord.EmbedBuilder()
                .setTitle(`Member got Unbanned ${Emojis.CheckMark}`)
                .setDescription(
                    `\nUser: ||\`${User.displayName}\`||` +
                    `\nTag: ||\`${User.tag}\`||` +
                    `\nID: ||\`${User.id}\`||`
                )

            await interaction.guild.members.unban(TargetID, {
                reason: Reason  
            })

            interaction.reply( { embeds: [UnbanEmbed] } )
        }
    }
}