const Discord = require("discord.js");

const fs = require("fs");

const DBjson = ".vscode/DB/MessageBotDB.json";

const data = fs.readFileSync(DBjson, "utf-8");

const ParsedDataBase = JSON.parse(data);

function DataTemplate(message) {
    if (message instanceof Discord.Message) {
        let Template = {
            MessageBot: {
                LevelTab: {
                    xp: 0,
                    level: 1,
                    ReqXP: 5,
                },
                UserInfo: {
                    ID: message.author.id,
                    GlobalName: message.author.globalName,
                    NameTag: message.author.tag,
                },
            },
            RarityBot: {
                Luck: 1,
                Bulk: 1,
            },
        };
        return Template;
    }
}

function RefreshDataTable(message) {
    if (message instanceof Discord.Message) {

        let authorID = message.author.id

        let RefreshedTemplate = {
            MessageBot: {
                LevelTab: {
                    xp: ParsedDataBase[authorID].MessageBot.LevelTab.xp,
                    level: ParsedDataBase[authorID].MessageBot.LevelTab.level,
                    ReqXP: ParsedDataBase[authorID].MessageBot.LevelTab.ReqXP,
                },
                UserInfo: {
                    ID: message.author.id,
                    GlobalName: message.author.globalName,
                    NameTag: message.author.tag,
                },
            },
            RarityBot: {
                Luck: 1,
                Bulk: 1,
            },
        };

        return RefreshedTemplate;
    }
}

module.exports = { DataTemplate, RefreshDataTable };
