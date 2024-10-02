function ColorOutput(input) {
    const colors = {
        red: 31,
        green: 32,
        yellow: 33,
        blue: 34,
        magenta: 35,
        cyan: 36,
        white: 37
    };

    const output = {};

    for (const [color, code] of Object.entries(colors)) {
        output[color] = `\x1b[${code}m${input}\x1b[39m`; // Create properties dynamically
    }

    return output;
}


module.exports = {ColorOutput}