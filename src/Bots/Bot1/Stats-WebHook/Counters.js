const fs = require('fs')
const PayloadPath = "src/Bots/Bot1/Stats-WebHook/payload-stats.json"

const data = fs.readFileSync(PayloadPath, 'utf-8')
const ParsedPayload = JSON.parse(data)


function increaseStatCounters(constructorName) {

    console.log(ParsedPayload)

    const PayloadIndex = "Total" + constructorName + "s"

    ParsedPayload[PayloadIndex] += 1

    console.log(`Successfully wrote data <---${PayloadIndex}---> in ${PayloadPath}`)

    fs.writeFileSync(PayloadPath, JSON.stringify(ParsedPayload, null, 4), 'utf-8')
}

module.exports = {
    increaseStatCounters
}