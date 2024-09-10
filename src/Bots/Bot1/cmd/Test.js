const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { options } = require("request");

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
                    { name: "🟢", value: "green" },
                    { name: "🔴", value: "red"}
            )
        )
        .addStringOption(option => 
            option
                .setName("reason")
                .setDescription("Why did you create this Role")
                .setRequired(false)
                .setMaxLength(100)
        ),
    

    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            interaction.reply("Done")
            let RoleName = interaction.options.get("name").value
            let RoleColor = interaction.options.get("color").value
            let Reason = interaction.options.get("reason").value
            await interaction.guild.roles.create({name: RoleName, color: RoleColor, reason: Reason})
        }
    }
};
