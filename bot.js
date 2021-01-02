require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){

    console.log('Bot is ready to be used');

}

client.on('message', message => {
	if ((message.mentions.everyone) /*&& (message.channel.id == '597149043793068053')*/){
        message.delete();
        message.reply("Don't tag everyone");
	}
});

let lastActionId;
client.on('voiceStateUpdate', async hh => {

    
   let hhnn =  client.channels.cache.get('794960072702033980');

    let nnhh = (await client.guilds.cache.get('212250736254255104').fetchAuditLogs({limit:1})).entries.array()[0];

    if((nnhh.action === "MEMBER_MOVE") && (nnhh.id !== lastActionId)){
        lastActionId = nnhh.id;
        let tmova = hh.member.user.username;
        let mova = nnhh.executor.username;
        hhnn.send(tmova + " was moved by: " + mova );
        console.log(nnhh);

        
        

    }


    
});
