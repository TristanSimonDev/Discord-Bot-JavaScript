const Discord = require('discord.js');

const dotenv = require('dotenv').config()

const interactions = require('./Interactions')
const fs = require('fs')

const ColorOutput = require('./functions/ColorOutput').ColorOutput

// -----------------------Set Permissions---------------------------
const client = new Discord.Client({ intents: [32767], });  
// -----------------------------------------------------------------





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
    client.destroy();  // Clean up resources  [logout]
    process.exit(0);  // Exit process
});

// Login to Discord
client.login(process.env.TokenForChatBot)
    .then(() => {
        console.log(ColorOutput(
            `\n=== Bot Login Info ===` +
            `\n\nToken Length:                 ${process.env.TokenForChatBot.length}` +
            `\nNode Version:                   ${process.version}` +
            `\nDevice Architecture:            ${process.arch}` +
            `\nDiscord.js Version:             ${require('discord.js').version}` +
            `\nOS:                             ${process.platform}` +
            `\nUptime:                         ${Math.floor(process.uptime())} seconds` +
            `\nMemory Used:                    ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB` +
            `\nStatus: Working [${client.user.tag}] => Logged in Successfully\n`
        ).magenta);
    })
    .catch((error) => {
        console.log(ColorOutput(
            `\n=== Bot Login Info ===` +
            `\n\nToken Length:                  ${process.env.TokenForChatBot.length}` +
            `\nNode Version:                   ${process.version}` +
            `\nDevice Architecture:            ${process.arch}` +
            `\nDiscord.js Version:             ${require('discord.js').version}` +
            `\nOS:                             ${process.platform}` +
            `\nUptime:                         ${Math.floor(process.uptime())} seconds` +
            `\nMemory Used:                    ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB` +
            `\nStatus: Failed [ERROR] => Login failed\n`
        ).red); // Changed to red for errors
        console.error(`Error Details: ${error.message}`); // Log the error details for debugging
    });
