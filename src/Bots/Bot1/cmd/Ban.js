const Discord = require('discord.js')
const Emojis = require('../modules/requireSettings').Emojis

const BanTimes = {
    "1": 60,                //1min
    "2": 180,               //3min
    "3": 300,               //5min
    "4": 600,               //10min
    "5": 1800,              //30min
    "6": 3600,              //60min[1h]
    "7": 3600 * 6,          //6h
    "8": 3600 * 12,         //12h
    "9": 3600 * 24,         //24h[1d]
    "10": 3600 * 24 * 3,    //3d
    "11": 3600 * 24 * 7,    //7d[1week]
    "12": 3600 * 6 * 30,    //30d[1month]
    "13": 3600 * 6 * 182.5, //6Months
    "14": 3600 * 6 * 365,   //365d[1Year]
    "99": Infinity,         //Infinite
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("ban")
        .setDescription("ban a user from the Server")
        .addUserOption(option =>
            option
                .setName("target")
                .setDescription("The User that you want to ban (ID)")
                .setRequired(true)
        ),
    
    
    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            const TargetID = interaction.options.get("target").value
            const Guild = interaction.guild
            const User = await interaction.guild.members.fetch(TargetID)

            const BanEmbed = new Discord.EmbedBuilder()
                .setTitle(`User got Banned ${Emojis.RedCross}`)
                .setDescription(
                    `\nUser: ||\`${User.displayName}\`||` +
                    `\nTag: ||\`${User.user.tag}\`||` +
                    `\nID: ||\`${User.id}\`||`
                )

            await Guild.members.ban(TargetID, {
                reason: "Enter The Reason",
            })

            interaction.reply({ embeds: [BanEmbed] })
        }
    }
}