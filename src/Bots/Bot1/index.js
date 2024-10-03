const Discord = require('discord.js');

const dotenv = require('dotenv').config()

const interactions = require('./Interactions')
const fs = require('fs')

const ColorOutput = require('./functions/ColorOutput').ColorOutput


const client = new Discord.Client({ intents: [32767], });  // Adjust intents as needed for your bot's functionality





// -----------------------Set SlashCommands---------------------------

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/Bots/Bot1/cmd').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	}
}

//--------------------------------------------------------------------

//------------------------Client Events-------------------------------

const EventFiles = fs.readdirSync('src/Bots/Bot1/Events/').filter(file => file.endsWith('.js'))

for (const file of EventFiles) {
    const Event = require('./Events/' + file)

    console.log(ColorOutput(`Event [${Event.Name}]-[ID: ${Event.EventID}] successfully loaded Dynamically`).green)

    try {
        
         client[Event.Type](Event.Name, async (...args) => Event.execute(...args))
        
    } catch (err) {console.log(ColorOutput(`Error: ${err}`).red)}
}

//---------------------------------------------------------------------

process.on('SIGINT', () => {
    console.log(ColorOutput('Received SIGINT. Gracefully shutting down...').green);
    client.destroy();  // Clean up resources and logout
    process.exit(0);  // Exit the process
});

// Login to Discord
client.login(process.env.TokenForChatBot).then(console.log("Token is working")) || console.log("Error on Token");


