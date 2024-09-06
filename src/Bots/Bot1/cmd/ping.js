const discord = require("@discordjs/builders");

module.exports = {
    data: new discord.SlashCommandBuilder()
        .setName("new")
        .setDescription("Replies with Pong!")
        .addStringOption((option) => 
            option.setName("input").setDescription("The input to echo back")
            .setRequired(true)
        ),
            
        
    async execute(interaction) {

    },
};
