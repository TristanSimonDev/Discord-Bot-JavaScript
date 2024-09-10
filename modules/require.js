
const Discord = require('discord.js')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require("@discordjs/builders");
const dotenv = require('dotenv').config()
const mysql = require('mysql')



module.exports = {
    Discord,
    REST,
    dotenv,
    Routes,
    SlashCommandBuilder,
    mysql
}