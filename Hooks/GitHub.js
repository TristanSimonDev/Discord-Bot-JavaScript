const Discord = require('discord.js')

//ID 1291416506382684201
//Token EwIic-VfQWFhZ6C5G5EIHCfgt2efvBVicEKKS5zvDitTa8xjsYBnpl8kuCVzsLWecPGh

const webhookClient = new Discord.WebhookClient({ id: "1291416506382684201", token: "EwIic-VfQWFhZ6C5G5EIHCfgt2efvBVicEKKS5zvDitTa8xjsYBnpl8kuCVzsLWecPGh" });

webhookClient.send("test")