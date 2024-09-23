const Discord = require('../../../../modules/require').Discord
const Emojis = require('../../../../modules/RequireBot1Settings').Emojis

function InstructionEmbed() {
    const InstructionEmbed = new Discord.EmbedBuilder() 
        .setTitle(`Support/Help/Bugs/Reports ${Emojis.Ticket}`)
        .setDescription(
            `\n\nIf you need an Help Please Press the Button beloe, that Describes your Problem the best.` +

            `\n\nPlease note that: \n\n \`Spamming will Result in Kicks/Bans  \`${Emojis.Flag}`
            
        )
    
    
    return InstructionEmbed
}

module.exports = {InstructionEmbed}