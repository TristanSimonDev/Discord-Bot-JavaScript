const Discord = require('discord.js')
const fs = require('fs')

const DBpath = '.vscode/DB/MessageBotDB.json'

const data = fs.readFileSync(DBpath, 'utf8')

const ParsedDataBase = JSON.parse(data)

async function ManageInteractions(interaction) {

    if (interaction instanceof Discord.CommandInteraction) {
        if (!interaction.isChatInputCommand()) return;

        const interantionname = interaction.commandName
        const InteractionUserID = interaction.user.id

        let Events = {
            'new': testinteraction(),
            "get_data": "test"
        }

        Events[interantionname]


        function testinteraction() {
            interaction.reply(`Data for ${InteractionUserID}[${JSON.stringify(ParsedDataBase[InteractionUserID], null, 2)}]`);

        }




    }
}


module.exports = { ManageInteractions }