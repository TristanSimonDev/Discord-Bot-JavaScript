const env = require('dotenv').config()
const fs = require('fs')

const Discord = require('discord.js')

const PayloadPath = "src/Bots/Bot1/Hooks/payload-stats.json"



const WebhookClient = new Discord.WebhookClient({ id: "1292233165062275092", token: process.env.StatsWebhookToken })

function updateStatsEmbed() {

    const data = fs.readFileSync(PayloadPath, 'utf-8')
    const parsedPayload = JSON.parse(data)

    const Timestamp = Math.floor(Date.now() / 1000)

    const statsEmbed = new Discord.EmbedBuilder()
    .setTitle(`Server Stats`)
    .setDescription(
        `Total Messages: \`${parsedPayload["TotalMessages"]}\`\n` +
        `Total Slashcommands: \`${parsedPayload["TotalChatInputCommandInteraction"]}\`\n` +
        `Total Buttons: \`${parsedPayload["TotalButtonInteractions"]}\`\n` +
        `Total GuildMembers: \`${parsedPayload["GuildMembers"]}\n` +
        `Last Refreshed: <t:${Timestamp}:R>`
    )

    if (parsedPayload["StatsMessageID"]) {
    WebhookClient.editMessage(parsedPayload["StatsMessageID"], { embeds: [statsEmbed] })
    } else {
        WebhookClient.send({ embeds: [statsEmbed] }).then(
            message => {
                parsedPayload["StatsMessageID"] = message.id
                console.log(parsedPayload["StatsMessageID"])
                fs.writeFileSync(PayloadPath, JSON.stringify(parsedPayload, null, 4), 'utf-8')
            }
        )
    }
}

module.exports = {updateStatsEmbed}