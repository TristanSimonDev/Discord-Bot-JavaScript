const Chars = "1234567890abcdefghijklmnopqrstuvwxyz"


function GenerateTicketKey() {
    let lengthPerSequenze = 5 //for 5 it will be for example FHD5J
    let Sequenzes = 5         //for 2 it would be FHD5J-FHD5J 
        
    let Key = ""
    

    for (let i = 0; i < Sequenzes; i++) {

        Key.length > 1 ? Key += "-" : ""

        for (let j = 0; j < lengthPerSequenze; j++) {
            let RandomIndex = Math.floor(Math.random() * Chars.length)
            Key = Key.concat(Chars[RandomIndex])
        }
        
    }

    return Key
}

module.exports = {GenerateTicketKey}