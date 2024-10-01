const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const Emojis = require('../modules/requireSettings').Emojis

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("create_role")
        .setDescription("Create a Role")
        .addStringOption(option =>
            option
                .setName("name")
                .setDescription("What Name for the Role")
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName("color")
                .setDescription("What Color for the Role")
                .setRequired(true)
                .addChoices(
                    { name: "🟢", value: "Green" },
                    { name: "🔴", value: "Red"},
                    { name: "🔵", value: "Blue"},
                    { name: "🟣", value: "Purple"},
                    { name: "🟤", value: "Brown"},
                    { name: "🟡", value: "Yellow"},
                    { name: "🟠", value: "Orange"},
                )  
        )
        .addStringOption(option => 
            option
                .setName("reason")
                .setDescription("Why did you create this Role")
                .setRequired(false)
                .setMaxLength(100)
    )
        //you can only create Roles if you have ManageRoles or Admin
        .setDefaultMemberPermissions(
            Discord.PermissionFlagsBits.ManageRoles,
            Discord.PermissionFlagsBits.Administrator
        ),
    
    

    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {

            let RoleName = interaction.options.get("name").value
            let RoleColor = interaction.options.get("color").value
            let Reason = interaction.options.get("reason") ? interaction.options.get("reason").value : "None"
            let Permissions = Discord.PermissionFlagsBits.ViewChannel + Discord.PermissionFlagsBits.SendMessages

            let role = await interaction.guild.roles.create({ name: RoleName, color: RoleColor, reason: Reason, permissions: Permissions })

            const RoleCreationEmbed = new Discord.EmbedBuilder()
                .setTitle(`Role Created ${Emojis.Scroll}`)
                .setDescription(
                    `Name: ${role.name}` +
                    `\nID: ${role.id}` +
                    `\nHexColor: ${role.hexColor}` +
                    `\nBitPermissions: ${Object.values(role.permissions)}` +
                    `\nReason: ${Reason}`
                )

            interaction.reply({ embeds: [RoleCreationEmbed] })
        }
    }
};
