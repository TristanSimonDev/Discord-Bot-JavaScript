const Discord = require('discord.js')

const env = require('dotenv').config()

const Timestamp = Math.floor(Date.now() / 1000)


const fs = require('fs');

const data = fs.readFileSync('Hooks/payload.json', 'utf-8');

const payload = JSON.parse(data);


const HourlyEmbed = new Discord.EmbedBuilder()
    .setTitle("Commits \`All Time\`")
    .setDescription(
        `\nCurrent GitHub commits on my repo. This will automatically update every hour.` +
        `\nCommits: \`${payload.Commits.toString()}\`` +
        `\nPushes: \`${payload.Pushes.toString()}\`` +
        `\nLast Refreshed: <t:${Timestamp}:R>`)
    



const webhookClient = new Discord.WebhookClient({ id: "1291837786617544836", token: process.env.WebHookToken });



if (payload["MessageID"]) {
    try {
        webhookClient.editMessage(payload["MessageID"], {embeds: [HourlyEmbed]})
    } catch (err) {console.error(err)}
} else {
    try {
        webhookClient.send({ embeds: [HourlyEmbed] }).then(
            message => {
                payload["MessageID"] = message.id,
            
                console.log(payload["MessageID"]),
        
                fs.writeFileSync('Hooks/payload.json', JSON.stringify(payload, null, 4), 'utf-8')
            })
        console.log("success")
    } catch (err) {console.error(err)}
    
}




