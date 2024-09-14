const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

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
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                    { name: "🔴", value: "Red"},
                )  
        )
        .addStringOption(option =>
            option
                .setName("key")
                .setDescription("To Prevent Caos if an Account got Hacked")
                .setRequired(true)
        )
        .addStringOption(option => 
            option
                .setName("reason")
                .setDescription("Why did you create this Role")
                .setRequired(false)
                .setMaxLength(100)
    )
    .setDefaultMemberPermissions(null),
    
    

    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            interaction.reply("Done")
            let RoleName = interaction.options.get("name").value
            let RoleColor = interaction.options.get("color").value
            let Reason = interaction.options.get("reason").value
            interaction.guild.roles.create({name: RoleName, color: RoleColor, reason: Reason})
        }
    }
};
