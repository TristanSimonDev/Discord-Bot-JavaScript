const Discord = require('discord.js')
require("module-alias/register");
const SettingsJSON = require('@vscode/Settings.json')

const ReactionRoleMessage = SettingsJSON
const ReactionRoleChannel = SettingsJSON.Channels["ReactionRole-Channel"]


const LoadReactions = (Client) => {
    if (Client instanceof Discord.Client) {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    LoadReactions
}