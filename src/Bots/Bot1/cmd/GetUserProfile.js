const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const interactionEmbeds = require("../interactionEmbeds");

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("get_user_profile")
        .setDescription("Get the User Data")
        .addStringOption((option) =>
            option
                .setName("id")
                .setDescription("Enter the UserID")
                .setRequired(true)
        ),

    async execute(interaction) {
        if (interaction instanceof Discord.CommandInteraction) {
            console.log("test")
            interaction.reply("This took me too long")
        }
    }
};
