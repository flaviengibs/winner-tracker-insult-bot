const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});
let bannedWords = ["abruti", "andouille", "anormal", "arriéré", "bâtard", "bouffon", "connard", "conne", "connasse", "con",
    "couillon", "crétin", "débile", "enfoiré", "enculé", "espèce de", "imbécile", "idiot", "imbécile heureux",
    "imbécile profond", "incapable", "inutile", "merde", "merdeux", "nase", "naze", "nul", "pédé", "putain", 
    "pute", "salope", "taré", "teubé", "trou du cul", "tarlouze", "truffe", "abruti fini", "andouille de première", 
    "bouffon de service", "casse-couilles", "crétin de base", "débile profond", "enculé de tes morts", 
    "espèce de saloperie", "fils de pute", "gros con", "handicapé du cerveau", "incapable notoire", 
    "inutilité publique", "merde ambulante", "merde infâme", "nase complet", "naze absolu", "nul à chier", 
    "pédale", "putain de merde", "pute à fric", "sale con", "salope finie", "taré complet", "teubé notoire", 
    "trou du cul fini", "tarlouze en puissance", "truffe de compétition", "salaud", "salopard", "porn", 
    "porno", "pornographie", "pédophile", "viol", "violer", "violeur", "inceste", "sodomie", "baiser", 
    "branler", "branlette", "cul", "puter", "sucer", "suceur", "ta gueule", "nique ta mère", "nique", 
    "niquer", "enculer", "trouduc", "pute à fric", "batard", "pd", "conn**d", "c*n", "enfoir*", "enc*l*", 
    "fdp", "fils de p*", "mer**", "sa*ope", "tr** du cul", "n*que", "su**r", "s*x", "s*xe", "p*rn", "p*do", "tepu", "ptn", "mrd", "slpe", "salope va"];

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


function containsExactWord(message) {
  return bannedWords.some(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' pour insensible à la casse
    return regex.test(message.content);
  });
}


client.on('messageCreate', message => {
    console.log("Message received : " + message);
    if(containsExactWord(message)) {
      console.log("Mot banni détecté");
      message.delete();
      console.log("Message supprimé");
      message.channel.send(`${message.author}, votre message a été supprimé car il contenait un mot interdit.`);
    } else {
      console.log("Pas de mot banni");
    }
}); 

client.login("MTI1NDUwMDYxNTgzNzU4MTQxNQ.G4MtI6.iCltycI67Evwv0Mp283bphLIde7pCYT8hCSUS8");
