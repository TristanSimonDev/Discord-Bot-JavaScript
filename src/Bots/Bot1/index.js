const Discord = require('discord.js');

const ReactionLoader = require('./Load/load');
const Reactions = require('./Reaction');
const dotenv = require('dotenv').config()

const TicketInstruction = require('./TicketSystem/TicketInstructions')

const reloadcommands = require('./Commands')
const interactions = require('./Interactions')

const fs = require('fs')




const client = new Discord.Client({ intents: [32767], });  // Adjust intents as needed for your bot's functionality


// Slash
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/Bots/Bot1/cmd').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	}
}

//Buttons


client.on('ready', () => {
	console.log('MessageBot ready');
    TicketInstruction.InstructionEmbed(client)
    
    reloadcommands.ListCommands()
    
    ReactionLoader.LoadReactions(client);

    signal = true

});

client.on('messageReactionAdd', async (reaction, user) => {
    Reactions.ReactionEvent(reaction, user);
});

client.on('interactionCreate', async interaction => {
    
    let InteractionTypes = {
        "ButtonInteraction": interactions.ButtonInteraction(interaction),
        "ChatInputCommandInteraction": interactions.SlashcommandInteraction(interaction) //Slashcommand
    }
    
    //Select Interaction Dynamicly
    await InteractionTypes[interaction]
    

	
	
	
});



client.on('disconnect', (event) => {
    console.log(`The client has disconnected with reason: ${event.reason} (Code: ${event.code})`);

});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Gracefully shutting down...');
    client.destroy();  // Clean up resources and logout
    process.exit(0);  // Exit the process
});

// Login to Discord
client.login(process.env.TokenForChatBot);


/*

async function waitForSignal() {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (signal) {
                clearInterval(interval); // Clear the interval when signal is true
                resolve(); // Resolve the promise
                console.log(client.user)
            }
        }, 100); // Check every 100 milliseconds
    });
}

waitForSignal()

*/
