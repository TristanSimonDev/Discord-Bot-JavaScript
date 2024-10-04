const Discord = require('discord.js')

const env = require('dotenv').config

const webhookClient = new Discord.WebhookClient({ id: process.env.WebHookID, token: process.env.WebHookToken });

webhookClient.send("test")