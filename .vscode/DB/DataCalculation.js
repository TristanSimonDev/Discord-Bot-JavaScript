const Discord = require("discord.js");
const fs = require("fs");

const dataTemplate = require('./dataTemplate')

const DBpath = ".vscode/DB/MessageBotDB.json";

const data = fs.readFileSync(DBpath, "utf8");

const ParsedDataBase = JSON.parse(data);

const RefreshDataTable = (message) => {
    if (message instanceof Discord.Message) {

        console.log("passed")


        ParsedDataBase[authorID] = {
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

                    Data: {
                        UpdateMessages: 0,
                        MessagesUntillUpdate: 5,
                    }
                },
            },

            RarityBot: {
                Luck: 1,
                Bulk: 1,
            },


        };

    }
};

function DataBase(message) {
    if (message instanceof Discord.Message) {
        const authorID = message.author.id;


        if (!ParsedDataBase[authorID]) {
            ParsedDataBase[authorID] = dataTemplate.dataTemplate(message)

            //RefreshDataTable(message)

            const updatedData = JSON.stringify(ParsedDataBase, null, 2);
            fs.writeFileSync(DBpath, updatedData, "utf8", (error) => { });
            console.log("done");
        }
    }
}

    module.exports = { DataBase }