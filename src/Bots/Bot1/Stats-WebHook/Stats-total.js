const env = require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const colorOutput = require('../functions/ColorOutput').ColorOutput

const PayloadPath = "src/Bots/Bot1/Stats-WebHook/payload-stats.json"



const WebhookClient = new Discord.WebhookClient({ id: "1292233165062275092", token: process.env.StatsWebhookToken })

async function updateStatsEmbed() {

    console.log(colorOutput("Refreshing Stats Embed...").yellow)

    const data = fs.readFileSync(PayloadPath, 'utf-8')
    const parsedPayload = JSON.parse(data)

    const Timestamp = Math.floor(Date.now() / 1000)

    const statsEmbed = new Discord.EmbedBuilder()
    .setTitle(`Server Stats`)
    .setDescription(
        `Total Messages: \`${parsedPayload["TotalMessages"]}\`\n` +
        `Total Slashcommands: \`${parsedPayload["TotalChatInputCommandInteraction"]}\`\n` +
        `Total Buttons: \`${parsedPayload["TotalButtonInteractions"]}\`\n` +
        `Last Refreshed: <t:${Timestamp}:R>`
    )

    try {
        if (parsedPayload["StatsMessageID"]) {
            // Update the existing message
            await WebhookClient.editMessage(parsedPayload["StatsMessageID"], { embeds: [statsEmbed] });
            console.log(colorOutput("Successfully updated the existing Stats Embed in your channel!").green);
        } else {
            // Send a new message
            const message = await WebhookClient.send({ embeds: [statsEmbed] });
            parsedPayload["StatsMessageID"] = message.id;
            fs.writeFileSync(PayloadPath, JSON.stringify(parsedPayload, null, 4), 'utf-8');
            console.log("Successfully loaded a new Stats Embed in your channel!");
        }
    } catch (err) {
        console.error(`An error occurred while trying to update or send the Stats Embed: ${err}`);
    }
}



module.exports = {updateStatsEmbed}