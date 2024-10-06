const fs = require('fs')
const PayloadPath = "Hooks/Data/payload.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')
const ParsedPayload = JSON.parse(data)

function increaseSlashcommandCounter() {
    console.log(ParsedPayload)

    ParsedPayload["TotalSlashCommands"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

function increaseTotalMessageCounter() {
    console.log(ParsedPayload)

    ParsedPayload["TotalMessages"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

function increaseTotalMessageCounter() {
    console.log(ParsedPayload)

    ParsedPayload["TotalMessages"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

function increaseTotalButtonInteractionsCounter() {
    console.log(ParsedPayload)

    ParsedPayload["TotalButtonInteractions"] += 1

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

module.exports = {
    increaseSlashcommandCounter,
    increaseTotalButtonInteractionsCounter,
    increaseTotalMessageCounter
}
