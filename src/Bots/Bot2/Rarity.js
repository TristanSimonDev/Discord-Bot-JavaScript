const Discord = require("discord.js");
const SettingsJSON = require('../../../.vscode/BotSettings/Settings.json')
const functions = require('../../../functions/GlobalFunctions')

const formatLargeNumber = functions.formatLargeNumber

const Luck = 1e30;
const Bulk = 1
//[[name] [Chance] [roleID] [ID]]

const Raritys = [
    [["Common       "], [1, 5], ["4372443329"], [1]],
    [["Uncommon     "], [1, 25], ["5823491740"], [2]],
    [["Epic         "], [1, 500], ["9372640185"], [3]],
    [["Rare         "], [1, 200], ["1047385926"], [4]],
    [["Legendary    "], [1, 1000], ["6730192854"], [5]],
    [["Mythical     "], [1, 5000], ["2395847160"], [6]],
    [["Ancient      "], [1, 10000], ["8473291056"], [7]],
    [["Divine       "], [1, 20000], ["1938472650"], [8]],

    [["Galactic     "], [1, 100000], ["9083746152"], [9]],
    [["Celestial    "], [1, 50000], ["4758392016"], [10]],
    [["Fabled       "], [1, 200000], ["6730284195"], [11]],
    [["Ethereal     "], [1, 500000], ["2047391658"], [12]],
    [["Cosmic       "], [1, 1000000], ["3826140975"], [13]],
    [["Quantum      "], [1, 2000000], ["1298470365"], [14]],
    [["Supreme      "], [1, 5000000], ["5840392176"], [15]],
    [["Divinity     "], [1, 10000000], ["7653910482"], [16]],
    [["Phantom      "], [1, 20000000], ["9302847561"], [17]],
    [["Aurora       "], [1, 30000000], ["4857329016"], [18]],

    [["Nebula       "], [1, 50000000], ["6280473195"], [19]],
    [["Stellar      "], [1, 75000000], ["2748503916"], [20]],
    [["Eclipse      "], [1, 100000000], ["9102837465"], [21]],
    [["Obsidian     "], [1, 150000000], ["7362810945"], [22]],
    [["Astral       "], [1, 200000000], ["4819305762"], [23]],
    [["Luminous     "], [1, 300000000], ["5928371046"], [24]],
    [["Radiant      "], [1, 500000000], ["8372104956"], [25]],
    [["Transcendent "], [1, 750000000], ["9057382164"], [26]],
    [["Eternal      "], [1, 1000000000], ["6381720495"], [27]],
    [["Primordial   "], [1, 1500000000], ["3847192056"], [28]],

    [["Omniscient   "], [1, 2000000000], ["2948173560"], [29]],
    [["Absolute     "], [1, 3000000000], ["6102839475"], [30]],
    [["Legend       "], [1, 5000000000], ["4759382106"], [31]],
    [["Titanic      "], [1, 7500000000], ["2039485176"], [32]],
    [["Mythos       "], [1, 10000000000], ["6174039285"], [33]],
    [["Supremacy    "], [1, 15000000000], ["4857329106"], [34]],
    [["Eclipse Prime"], [1, 20000000000], ["7293481056"], [35]],
    [["Omega        "], [1, 30000000000], ["5738204196"], [36]],
    [["Infinity     "], [1, 50000000000], ["8492017365"], [37]],
];


function RollRarity(message) {
    if (message instanceof Discord.Message) {
        const getRarity = (RArray) => {
            let TotalWeight = 0;
            let NewRarityArray = [];
    
            RArray.forEach((Rarity) => {
                let Weight = Rarity[1][1];
                let NewWeight = Weight / Luck;
    
                if (NewWeight < 1) {
                    NewWeight = 1;
                }
    
                let fraction = 1 / NewWeight;
                TotalWeight += fraction;
                NewRarityArray.push(fraction);
            });
    
            const rnd = Math.random() * TotalWeight;
            let SelectedRarity;
            let ACC = 0;
            let Index
            let ModifiedIndex
            let RawPercentage
            let ModifiedPercentage
            let ID
    
            for (let i = 0; i < RArray.length; i++) {
                ACC += NewRarityArray[i];
                if (rnd < ACC) {
                    SelectedRarity = RArray[i][0][0]; // The Name
                    Index = RArray[i][1][1];
                    ID = RArray[i][3];
                    RawPercentage = (RArray[i][1][0] / RArray[i][1][1]) * 100;
                    break;
                }
            }
    
            const RollChannel = message.guild.channels.cache.get(SettingsJSON.Channels["Roll-Channel"]);
    
            if (RollChannel instanceof Discord.TextChannel) {
                const Embed = new Discord.EmbedBuilder()
                    .setTitle("New Rarity <:Lightning:1273879490250145803>")
                    .setDescription(`\`${message.author?.globalName}\`` +
                        `\nRolled: ${SelectedRarity}` +
                        `\n\nChance: ${RawPercentage}%` +
                        `\nValue: 1 in ${formatLargeNumber(Index)}` +
                        `\n\nModifiers<:Settings:1280029107614122079>:` +
                        `\n\nLuck: ${Luck} <:GreenClover:1280028333043617844>` +
                        `\nBulk: ${Bulk} <:Bulk:1280030882786443346>` +
                        `\n\nID ${ID}/${Raritys.length} <:Index:1280030904470863883>` +
                        `\n\nBoost<:LuckPotion:1280029881601626232><:BulkPotion:1280029914330042388><:PotionBlueStroke:1280029859749564416>:` +
                        `\n\nLuck<:LuckPotion:1280029881601626232>:` +
                        `\nBulk<:BulkPotion:1280029914330042388>:` +
                        `\nI dont know<:PotionBlueStroke:1280029859749564416>:`

                        
                );
                
                try {
                    RollChannel.send({ embeds: [Embed] });
                    return `Rolled: ${SelectedRarity} ID ${ID}: ${RawPercentage}% the Chance was 1 in ${formatLargeNumber(Index)} with Luck: ${formatLargeNumber(Luck)}`;
                } catch (error) {
                    console.error(error)
                }
                    
                
            }
        };
        console.error(getRarity(Raritys));
    }
}

    

module.exports = {
    RollRarity,
};