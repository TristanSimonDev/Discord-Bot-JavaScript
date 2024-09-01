let Bulk = 1000000000;  // Example large bulk value

const Raritys = [
    [["Common       "], [1, 5], ["4372443329"], [1]],
    [["Uncommon     "], [1, 25], ["5823491740"], [2]],
    [["Epic         "], [1, 500], ["9372640185"], [3]],
    [["Rare         "], [1, 200], ["1047385926"], [4]],
    [["Legendary    "], [1, 1000], ["6730192854"], [5]],
    [["Mythical     "], [1, 5000], ["2395847160"], [6]],
    [["Ancient      "], [1, 10000000000], ["8473291056"], [7]],
];

// Helper function to generate a random number with normal distribution (Gaussian)
function randomGaussian(mean, stddev) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let standardNormal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return mean + stddev * standardNormal;
}

let RollRarity = (RariyArray, bulkSize) => {
    let totalWeight = 0;
    let weightFractions = [];

    // Calculate the fraction for each rarity and the total weight
    RariyArray.forEach(rarity => {
        let weight = rarity[1][1];
        let fraction = 1 / weight;
        totalWeight += fraction;
        weightFractions.push(fraction);
    });

    let rarityCounts = {};

    // Compute the count for each rarity using random variation based on the bulk size
    RariyArray.forEach((rarity, index) => {
        let rarityName = rarity[0][0].trim();
        let probability = weightFractions[index] / totalWeight;
        let expectedCount = probability * bulkSize;  // Expected count based on probability

        // Introduce random variation around the expected count
        // We use sqrt(expectedCount) as a rough estimate for the standard deviation
        let count = Math.max(0, Math.round(randomGaussian(expectedCount, Math.sqrt(expectedCount)))); // Ensure no negative counts

        rarityCounts[rarityName] = count;
    });

    // Convert the result to the output format
    let output = Object.keys(rarityCounts).map(rarity => `${rarity} ${rarityCounts[rarity]}x`);

    console.log(output.join("\n"));
};

RollRarity(Raritys, Bulk);
