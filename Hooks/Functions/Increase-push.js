const fs = require('fs')
const { stringify } = require('querystring')

const PayloadPath = "Hooks/Data/payload.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')

const ParsedPayload = JSON.parse(data)

ParsedPayload.Pushes += 1

fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')