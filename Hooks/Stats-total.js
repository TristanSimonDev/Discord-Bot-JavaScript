const env = require('dotenv').config()
const fs = require('fs')
const Timestamp = Math.floor(Date.now() / 1000)
const Discord = require('discord.js')

const PayloadPath = "Hooks/Data/payload.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')
const parsedPayload = JSON.parse(data)

const WebhookClient = new Discord.WebhookClient({ id: "1292233165062275092", token: process.env.StatsWebhookToken })


const statsEmbed = new Discord.EmbedBuilder()
    .setTitle(`Server Stats`)
    .setDescription(
        `Total Messages: \`${parsedPayload["TotalMessages"]}\`\n` +
        `Total Slashcommands: \`${parsedPayload["TotalSlashCommands"]}\`\n` +
        `Total GuildMembers: \`${parsedPayload["GuildMembers"]}\``
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




