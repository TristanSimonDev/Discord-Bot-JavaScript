const dotenv = require('dotenv') 

dotenv.config()

function loadEnv() {
    const Token =  process.env.TOKEN
    try {
        return Token
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    loadEnv,
}