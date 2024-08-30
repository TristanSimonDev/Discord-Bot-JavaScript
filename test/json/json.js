const { error, info } = require('console');
const fs = require('fs');
const path = './.vscode/DB/MessageBotDb.json'

const id = 25

// Corrected relative path to the JSON file
const dataBase = fs.readFileSync(path,'utf8');
// Parsing the JSON data
const parsedDataBase = JSON.parse(dataBase);

if (!parsedDataBase[id]) {
    parsedDataBase[id] = {
        LevelTab: {
            xp: 0,
            level: 1,
            ReqXP: 5,
        },    
        Data: {
            ID: id,
        }
    }
}

parsedDataBase[id].LevelTab.xp += 1

if (parsedDataBase[id].LevelTab.xp >= parsedDataBase[id].LevelTab.ReqXP) {
    parsedDataBase[id].LevelTab.level += 1

    const roundedReqXP = Math.round(parsedDataBase[id].LevelTab.ReqXP * (parsedDataBase[id].LevelTab.level / 0.9))
    parsedDataBase[id].LevelTab.ReqXP = roundedReqXP

    parsedDataBase[id].LevelTab.xp = 0
}


const updatedData = JSON.stringify(parsedDataBase, null, 2);

fs.writeFile(path, updatedData, 'utf8', (error) => {
})

console.log((3 / 10) + 1) * 0 //0 is event