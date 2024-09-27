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
                    xp: 1,
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


module.exports = { DataTemplate};
