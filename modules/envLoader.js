const dotenv = require('dotenv') 

dotenv.config()

function LoadEnvForChatBot() {
    const Token = process.env.TokenForChatBot
    try {
        return Token
    } catch (error) {
        console.error(error)
    }
}

function LoadEnvForRarityBot() {
    const Token = process.env.TokenForRarityBot
    try {
        return Token
    } catch (error) {
        console.error(error)
    }
}

function GuildID() {
    const GuildID = process.env.GuildID
    try {
        return GuildID
    } catch (error) {
        console.error(error)
    }
}

function ClientID() {
    const ClientID = process.env.ClientID
    try {
        return ClientID
    } catch (error) {
        console.error(error)
    }
}



module.exports = {
    LoadEnvForChatBot,
    LoadEnvForRarityBot,
    GuildID,
    ClientID,
}