const Discord = require('discord.js')

const env = require('dotenv').config

const payload = require('./payload.json')
const fs = require('fs')

const data = fs.readFileSync(payload, 'utf-8')

console.log(data)

const webhookClient = new Discord.WebhookClient({ id: "1291837786617544836", token: process.env.WebHookToken });

webhookClient.send("test")