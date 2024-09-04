const discord = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Replies with Pong!")
        .addStringOption((option) =>
            option.setName("input").setDescription("The input to echo back")),
        
    async execute(interaction) {
        await interaction.reply("Pong!");
    },
};
