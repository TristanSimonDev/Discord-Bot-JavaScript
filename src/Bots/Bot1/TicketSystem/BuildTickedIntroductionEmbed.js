const Discord = require('discord.js');
const Emojis = require('../../../../modules/RequireBot1Settings').Emojis

function InstructionEmbed() {
    const InstructionEmbed = new Discord.EmbedBuilder() 
        .setTitle(`Support/Help/Bugs/Reports ${Emojis.Ticket}`)
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
        
    //add the buttons in an array
    let Buttons = [BugReportButton]
    
    const row = new Discord.ActionRowBuilder()
            //add all Buttons in the ButtonArray
        .addComponents(...Buttons);

        
    
    return {
        Embed: InstructionEmbed,
        Rows: row
    }
}

module.exports = {InstructionEmbed}