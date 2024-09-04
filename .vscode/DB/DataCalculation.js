const Discord = require("discord.js");
const fs = require("fs");

const dataTemplate = require('./dataTemplate')

const DBpath = ".vscode/DB/MessageBotDB.json";

const data = fs.readFileSync(DBpath, "utf8");

const ParsedDataBase = JSON.parse(data);



function DataBase(message) {
    if (message instanceof Discord.Message) {

        

        if (!ParsedDataBase[message.author.id]) {
            ParsedDataBase[message.author.id] = dataTemplate.DataTemplate(message)
        } else {ParsedDataBase[message.author.id] = dataTemplate.RefreshDataTable(message)}

        

        const updatedData = JSON.stringify(ParsedDataBase, null, 2);

        fs.writeFileSync(DBpath, updatedData, "utf8", (error) => { });
        console.log("done");
        
    }
}

    module.exports = { DataBase }
