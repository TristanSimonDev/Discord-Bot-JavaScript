const Discord = require('discord.js');
const Emojis = require('./modules/requireSettings').Emojis


async function InstructionEmbed(Client) {
    const InstructionEmbed = new Discord.EmbedBuilder() 
        .setTitle(`Support/Help/Bugs/Reports ${Emojis.Flag}`)
        .setDescription(
            `\n\nIf you need an Help Please Press the Button beloe, that Describes your Problem the best.` +

            `\n\n**Please note that:** \n\n \`Spamming will Result in Kicks/Bans 🚩\`` + "\n")
        .setFooter({
            text: "Coded by Tristan | S.",
            iconURL: "https://cdn.discordapp.com/avatars/848247310520680489/c78cf9f7cd9536fb9580a68349088fb7.webp?size=40"
        })
    
    const BugReportButton = new Discord.ButtonBuilder()
        .setCustomId('TicketButton_report-bug')
        .setLabel('Report Bug 📩')
        .setStyle(Discord.ButtonStyle.Secondary)
    
        const ErrorReportButton = new Discord.ButtonBuilder()
        .setCustomId('TicketButton_report-error')
        .setLabel('Report Error 📩')
        .setStyle(Discord.ButtonStyle.Danger)
    
        const OtherReportButton = new Discord.ButtonBuilder()
        .setCustomId('TicketButton_report-other')
        .setLabel('Report Error 📩')
        .setStyle(Discord.ButtonStyle.Primary)
        
        
    //add the buttons in an array
    let Buttons = [BugReportButton, ErrorReportButton, OtherReportButton]
    
    const row = new Discord.ActionRowBuilder()
            //add all Buttons in the ButtonArray
        .addComponents(...Buttons);

        const Settings =  require('./modules/requireSettings')
        const TicketChannelID = Settings.Channels.CreateTicketChannel
        
        

    const TicketChannel = Client.channels.cache.get(TicketChannelID)

    
     

    let SendedInstructions = await TicketChannel.send({
        embeds: [InstructionEmbed],
        components: [row],
    })

    //console.log(SendedInstructions)
}
 
module.exports = {InstructionEmbed}