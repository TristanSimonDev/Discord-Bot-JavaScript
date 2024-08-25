const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders'); // Import SlashCommandBuilder

function SlashCommands(Client) {
    if (Client instanceof Discord.Client) { // Correctly check for the instance of Client
        const HelloCommand = new SlashCommandBuilder()
            .setName('sayhello')
            .setDescription('Says hello');

        Client.application.commands.create(HelloCommand);
    }
}

// Export the command and its execution logic
module.exports = {
    SlashCommands,
};
