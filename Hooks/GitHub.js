const Discord = require('discord.js')

const env = require('dotenv').config()



const fs = require('fs')

const data = fs.readFileSync('Hooks/payload.json', 'utf-8');

const payload = JSON.parse(data);

console.log(payload.test)


const webhookClient = new Discord.WebhookClient({ id: "1291837786617544836", token: process.env.WebHookToken });

webhookClient.send(payload.test.toString())