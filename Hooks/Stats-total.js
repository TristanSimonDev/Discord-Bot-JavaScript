const env = require('dotenv').config()
const fs = require('fs')
const Timestamp = Math.floor(Date.now() / 1000)
const Discord = require('discord.js')

const PayloadPath = "Hooks/Data/payload.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')
const parsedPayload = JSON.parse(data)

const WebhookClient = new Discord.WebhookClient({ id: "", token: "" })


const statsEmbed = new Discord.EmbedBuilder()
    .setTitle(`Server Stats`)

if (parsedPayload["StatsMessageID"]) {
    WebhookClient.editMessage(parsedPayload["StatsMessageID"], { embeds: [statsEmbed] })
} else {
    WebhookClient.send({ embeds: [statsEmbed] }).then(
        message => {
            parsedPayload["StatsMessageID"] = message.id
        }
    )
}



fs.writeFileSync(PayloadPath, JSON.stringify(parsedPayload, null, 4), 'utf-8')
