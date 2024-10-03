
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatLargeNumber(num) {
    if (typeof num === 'number') {
        const suffixes = ["", "k", "M", "B", "T", "q"];
        let index = 0;

        while (num >= 1000 && index < suffixes.length - 1) {
            num /= 1000;
            index++;
        }

        // Format 0
        let resultStr = num.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
        return resultStr + suffixes[index];
    } else {
        return 'Invalid input';
    }
}

/*
function formatPercentage(value: number): string {
    if (value < 0.0001) {
        return value.toExponential(2) + '%';
    }
    return value.toFixed(6).replace(/\.?0+$/, '') + '%';
}
*/
module.exports = {
    delay,
    formatLargeNumber,
}