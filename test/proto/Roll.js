let Bulk = 1e5

const Raritys = [
    ["Common       ", 5, ["4372443329"], 1],
    ["Uncommon     ", 25, ["5823491740"], 2],
    ["Epic         ", 500, ["9372640185"], 3],
    ["Rare         ", 200, ["1047385926"], 4],
    ["Legendary    ", 1000, ["6730192854"], 5],
    ["Mythical     ", 5000, ["2395847160"], 6],
    ["Ancient      ", 10000, ["8473291056"], 7],
];

let RollRarity = (RariyArray) => {
    
    let TotalRaritys = 0;
    let WeightArray = [];
    
    

    let selectedRarities = [];

    for (let i = 0; i < Bulk; i++) {
        let rnd = Math.random() * TotalWeight;
        let acc = 0;
        let SelectedRarity;

        for (let j = 0; j < WeightArray.length; j++) {
            acc += WeightArray[j];
            if (rnd < acc) {
                SelectedRarity = RariyArray[j][0][0].trim(); 
                break; 
            }
        }

        selectedRarities.push(SelectedRarity);
    }

    let rarityCounts = selectedRarities.reduce((counts, rarity) => {
        counts[rarity] = (counts[rarity] || 0) + 1;
        return counts;
    }, {});


    let output = Object.keys(rarityCounts).map(rarity => `${rarity} ${rarityCounts[rarity] }x`)
    

    console.log(output.join("\n"));
};

RollRarity(Raritys);
