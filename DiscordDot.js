const botconfig = require("./botconfig.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("l!help∙liter_bot.exe"), ({type: "literbot.exe"});
})

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let profix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];

    if(cmd === `${profix}szia`){
        return message.channel.send("Helokabeloka")
    }

    if(cmd === `${profix}help`){
        return message.channel.send("```fix\nMiben segíthetek?\nl!nem_mukodo_szoba\nl!nem_hallanak_nem_hallokmasokat\nl!képernyo_megosztas\nRendszergazdai segítségért vagy ha nem találod ezek között a választ akkor írj kérlek a rendszergazdáknak: Tál Gergely, Varga Ádám\n```")

    }
    if(cmd === `${profix}nem_mukodo_szoba`){
        return message.channel.send("Nagy esélyel megoldja a problémádat ha kilépsz a fiókodból és vissza ha ez nem oldotta meg a problémádat akkor vagy  az interneteddel van a probélma\n vagy a rendszergazdák ha ellenőrizted az internetedet is akkor kérlek írj: Tál Gergely-nek vagy Varga Ádám-nak azaz a rendszergazdáknak")
    }
    if(cmd === `${profix}nem_hallanak_nem_hallokmasokat`){
        return message.channel.send("Valószínü, hogy a problémádat megoldja egy egyszerű le és fel csatlakozás a hangcsatornáról.\n Akár ha bemész a beálításokba(bal allul) >Hang és Videó(szintén bal oldalt)>Ellenőrizd a be és kimeneti ezközt hogy jó van-e beállítva.")
    }
    if(cmd === `${profix}képernyo_megosztas`){
        return message.channel.send("Ha bent vagy egy hívásban akkor a képernyő bal alsó részén megjelenik egy képernyő ikon amiben vagy egy nyíl ha arra rányomsz akkor\n megjelenik egy ablak aminek a tetején ki kell választanod a Teljes képernyőt és utána csak annyi dolgod van\n hogy rányomsz a megosztásra ami az ablak jobb alsó sarkában van")
    }
})

bot.login(botconfig.token);
