const Discord = require("discord.js");
const MessageReply = require("./MessageReply");
const envLoader = require("./envLoader");
const ReactionLoader = require("./LoadReactionsOnStart/load");
const Reactions = require("./Reaction");
const SlashCommands = require('./cmd/SlashCommands')
const SlashCommandInteraction = require('./cmd/SlashCommandInteraction')

const Client = new Discord.Client({
    intents: [3276799],
});

Client.on("ready", async (Client) => {
    console.log("Client ready");
    ReactionLoader.LoadReactions(Client);
    SlashCommands.SlashCommands(Client)
});

Client.on("messageCreate", async (message) => {
    MessageReply.MessageReply(message);
});

Client.on("messageReactionAdd", async (reaction, user) => {
    Reactions.ReactionEvent(reaction, user);
});

Client.on('interactionCreate', async (interaction) => {
    SlashCommandInteraction.SlashCommandInteractionReply(interaction)
    console.log(interaction)
});


Client.login(envLoader.loadEnv());
