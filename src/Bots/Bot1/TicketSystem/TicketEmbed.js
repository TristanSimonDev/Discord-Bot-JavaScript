const Discord = require('../../../../modules/require').Discord
const Emojis = require('../../../../modules/RequireBot1Settings').Emojis

function InstructionEmbed() {
    console.log(Emojis.Flag, Emojis.Ticket);
    const InstructionEmbed = new Discord.EmbedBuilder() 
        .setTitle(`Support/Help/Bugs/Reports ${Emojis.Ticket}`)
        .setDescription(
            `\n\nIf you need an Help Please Press the Button beloe, that Describes your Problem the best.` +

            `\n\n**Please note that:** \n\n \`Spamming will Result in Kicks/Bans 🚩\`` + "\n")
        .setFooter({
            text: "Coded by Tristan | S.",
            iconURL: "https://cdn.discordapp.com/avatars/848247310520680489/c78cf9f7cd9536fb9580a68349088fb7.webp?size=40"
        })
    
    const confirm = new Discord.ButtonBuilder()
        .setCustomId('confirm')
        .setLabel('Report Bug 📩')
        .setStyle(Discord.ButtonStyle.Secondary)
        
    
        const row = new Discord.ActionRowBuilder()
        .addComponents(confirm);

    
        
    
    return {
        Embed: InstructionEmbed,
        Rows: row
    }
}

module.exports = {InstructionEmbed}