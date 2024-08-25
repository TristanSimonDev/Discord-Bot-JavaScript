const Discord = require("discord.js");

function SlashCommandInteractionReply(interaction) {
    if (interaction instanceof Discord.ChatInputCommandInteraction) {
        if (interaction.commandName == "sayhello") {
            interaction.reply("test");
        }
    }
}

module.exports = {
    SlashCommandInteractionReply,
};
