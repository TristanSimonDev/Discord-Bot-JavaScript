const fs = require('fs')
const PayloadPath = "Hooks/Data/payload-stats.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')
const ParsedPayload = JSON.parse(data)

function increaseTotalChatInputCommandInteractionCounter() {
    console.log(ParsedPayload)

    ParsedPayload["TotalSlashCommands"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

function increaseTotalButtonInteractionCounter() {
    console.log(ParsedPayload)


    ParsedPayload["TotalButtonInteractions"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

module.exports = {
    increaseTotalChatInputCommandInteractionCounter,
    increaseTotalButtonInteractionCounter
}
/*
increaseTotalButtonInteractionCounter
increaseTotalTotalButtonInteractionCounter
*/