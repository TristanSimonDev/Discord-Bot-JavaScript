const fs = require('fs')

const PayloadPath = "Hooks/Data/payload-github.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')

const ParsedPayload = JSON.parse(data)

ParsedPayload.Pushes += 1

fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')