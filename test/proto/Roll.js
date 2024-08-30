const Discord = require("discord.js");
const functions = require("../functions/GlobalFunctions");

const formatLargeNumber = functions.formatLargeNumber;

const Luck = 1;
const Bulk = 1;
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

function RollRarity() {
    const getRarity = (RArray) => {
        let TotalWeight = 0;  // Initialize total weight accumulator
        let AccumulatedWeights = []; // Array to store accumulated weights for each rarity
        let CumulativeWeights = [];  // Array to store cumulative weights for quick lookup
        
        // Precompute weights and cumulative weights
        RArray.forEach((Rarity, index) => {
            let Weight = Rarity[1][1]; // Get the maximum chance (weight) for the current rarity
            let NewWeight = Weight / Luck; // Calculate the effective weight based on Luck

            if (NewWeight < 1) NewWeight = 1; // Ensure minimum weight is 1

            let fraction = 1 / NewWeight; // Calculate the fraction of total weight
            TotalWeight += fraction; // Accumulate total weight

            AccumulatedWeights[index] = fraction; // Store fraction weight for each rarity
            CumulativeWeights[index] = TotalWeight; // Store cumulative weights for quick lookup
        });
        console.log(CumulativeWeights)
        console.log(AccumulatedWeights)

        let BulkRolls = new Array(Bulk); // Array to hold the result of each roll

        // Perform bulk rolls
        for (let r = 0; r < Bulk; r++) {
            const rnd = Math.random() * TotalWeight; // Generate a random number within the total weight
            // Find the index of the rarity that corresponds to the random number
            let SelectedRarityIndex = CumulativeWeights.findIndex(weight => rnd <= weight);
            
            // Retrieve the selected rarity details
            let SelectedRarity = RArray[SelectedRarityIndex][0][0]; // Name of the rarity
            let Index = RArray[SelectedRarityIndex][1][1]; // Maximum chance value for the rarity
            let ID = RArray[SelectedRarityIndex][3]; // ID associated with the rarity
            
            // Calculate percentages
            let RawPercentage = (RArray[SelectedRarityIndex][1][0] / RArray[SelectedRarityIndex][1][1]) * 100; 
            let ModifiedPercentage = AccumulatedWeights[SelectedRarityIndex] * 100;
            let ModifiedIndex = RArray[SelectedRarityIndex][1][1] / Luck; // Adjusted chance based on Luck
            if (ModifiedIndex < 1) ModifiedIndex = 1; // Ensure minimum chance is 1

            // Format the result string for the current roll
            BulkRolls[r] = `Rolled: ${SelectedRarity} ID ${ID}: ${RawPercentage}% [${ModifiedPercentage}%] the Chance was 1 in ${formatLargeNumber(Index)} [1 in ${ModifiedIndex}] with Luck: ${formatLargeNumber(Luck)}\n`;
        }

        try {
            return BulkRolls.join(''); // Join all roll results into a single string
        } catch (error) {
            console.error(error); // Log any error that occurs
        }
    };

    console.log(getRarity(Raritys)); // Call the getRarity function and print the result
}

RollRarity(Raritys); // Execute the RollRarity function with the Raritys data
