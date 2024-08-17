
const Discord = require('discord.js')
const MessageReply = require('./MessageReply')
const envLoader = require('./envLoader')
const ReactionLoader = require('./LoadReactionsOnStart/load')

const Client = new Discord.Client({
    intents: [3276799],
});

Client.on('ready', async (Client) => {
    console.log("Client ready")
    ReactionLoader.LoadReactions(Client)
})

Client.on('messageCreate', async (message) => {
    MessageReply.MessageReply(message)
})

Client.on('messageReactionAdd', async (reaction, user) => {
    
})

Client.login(envLoader.loadEnv())