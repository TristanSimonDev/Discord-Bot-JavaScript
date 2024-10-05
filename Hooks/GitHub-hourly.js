const Discord = require('discord.js')

const env = require('dotenv').config()

const date = new Date();

const year = date.getUTCFullYear();
const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Monate beginnen bei 0, daher +1
const day = String(date.getUTCDate()).padStart(2, '0');
const hours = String(date.getUTCHours()).padStart(2, '0');
const minutes = String(date.getUTCMinutes()).padStart(2, '0');

const FormatedDate = `${year}-${month}-${day}-${hours}:${minutes}`;

const Timestamp = Date.now() / 1000


const fs = require('fs');
const { title } = require('process');

const data = fs.readFileSync('Hooks/payload.json', 'utf-8');

const payload = JSON.parse(data);


const HourlyEmbed = new Discord.EmbedBuilder()
    .setTitle("Commits in the Last Hour")
    .setDescription( `<t:${Timestamp}>`)
    



const webhookClient = new Discord.WebhookClient({ id: "1291837786617544836", token: process.env.WebHookToken });

webhookClient.send({ embeds: [HourlyEmbed] }).then(


)

