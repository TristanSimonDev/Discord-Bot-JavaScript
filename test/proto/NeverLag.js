let Bulk = 100;  // Example large bulk value
let luck = 1

const Raritys = [
    // [Name, Chance, RoleID, Index, Secret]
    ["Common       ", 5,     "4372443329", 1, false],
    ["Uncommon     ", 25,    "5823491740", 2, false],
    ["Epic         ", 500,   "9372640185", 3, false],
    ["Rare         ", 200,   "1047385926", 4, false],
    ["Legendary    ", 1000,  "6730192854", 5, false],
    ["Mythical     ", 5000,  "2395847160", 6, false],
    ["Ancient      ", 10000, "8473291056", 7, false],
];

function randomGaussian(mean, stddev) {
    let u = Math.random(), v = Math.random()
    let standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    return mean + stddev * standardNormal;
}

let RollRarity = (RariyArray, bulkSize, luck) => {
    let totalWeight = 0;
    let weightFractions = [];

    // Calculate total weight fractions
    RariyArray.forEach(rarity => {
        let weight = Math.max(1, rarity[1] / luck)

        let fraction = 1 / weight;
        totalWeight += fraction;
        weightFractions.push(fraction);
    });

    let rarityCounts = {};

    // Calculate expected counts and actual counts
    let totalGenerated = 0;
    RariyArray.forEach((rarity, index) => {
        let rarityName = rarity[0];
        let probability = weightFractions[index] / totalWeight;
        let expectedCount = probability * bulkSize;


        // Limit randomness to prevent extreme deviations
        let count = Math.max(0, Math.round(randomGaussian(expectedCount, Math.sqrt(expectedCount))));
        rarityCounts[rarityName] = count;
        totalGenerated += count;

    });

    // Adjust counts to match the desired bulk size
    let adjustmentFactor = bulkSize / totalGenerated;
    let adjustedCounts = {};
    let adjustedTotal = 0;

    Object.keys(rarityCounts).forEach(rarity => {
        let adjustedCount = Math.round(rarityCounts[rarity] * adjustmentFactor);
        adjustedCounts[rarity] = adjustedCount;
        adjustedTotal += adjustedCount;
    });

    // Correct any rounding errors to ensure the exact bulk size
    let difference = bulkSize - adjustedTotal;
    if (difference !== 0) {
        let keys = Object.keys(adjustedCounts);
        for (let i = 0; i < Math.abs(difference); i++) {
            let key = keys[i % keys.length];
            adjustedCounts[key] += difference > 0 ? 1 : -1;
        }
    }

    // Convert result to the output format
    let output = Object.keys(adjustedCounts).map(rarity => `${rarity} ${adjustedCounts[rarity]}x`);

    return [
        output, 
        `Bulks Rolled: ${bulkSize} from ${bulkSize}`, 
        `Accuracy: 100% `
    ];
};



// Example of using the function
console.log(RollRarity(Raritys, Bulk, luck))
