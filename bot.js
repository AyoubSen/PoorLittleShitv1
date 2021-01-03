require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){

    console.log('Bot is ready to be used');

}

let PREFIX = "@everyone";


// This deletes any message where someone has included @everyone, and tells them to not do it.
//------------------------------------------------------------------- 
client.on('message', message => {
	
    
    if ((message.content.includes(PREFIX)) /*&& (message.channel.id == '597149043793068053')*/){
        message.delete();
        message.reply("Don't tag everyone");
	}
});
//------------------------------------------------------------------- 


let lastActionId;

// This is to know who was moved by whom
//------------------------------------------------------------------- 
client.on('voiceStateUpdate', async hh => {

    let botroom =  client.channels.cache.get('794960072702033980');

    let nnhh = (await client.guilds.cache.get('212250736254255104').fetchAuditLogs({limit:1})).entries.array()[0];

    
    if((nnhh.action === "MEMBER_MOVE") && (nnhh.id !== lastActionId)){
        lastActionId = nnhh.id;
        let tmova = hh.member.user.username;
        let mova = nnhh.executor.username;
        if(tmova !== mova){
            botroom.send(tmova + " was moved by " + mova );
            console.log(nnhh);
        }
        
    }
}); 
//------------------------------------------------------------------- 




// this is to know who created an invite link
//------------------------------------------------------------------- 
client.on('inviteCreate', invcreate =>{

    let botroom =  client.channels.cache.get('794960072702033980');
    let whoDidIt = invcreate.inviter.username;
    botroom.send("An invitation link was created by " + whoDidIt);
});
//------------------------------------------------------------------- 



client.on('messageDelete', msgdeleted => {

    if (msgdeleted.author.id !== "143839155372294144"){
        let botroom =  client.channels.cache.get('794960072702033980');

        let whoDidIt = msgdeleted.author.username;
    
        let text = msgdeleted.cleanContent;
    
        botroom.send("A message of " + whoDidIt + " was deleted by " + whoDidIt);
        botroom.send("' " + text + " '");
    }
    


    
});


    
    
    
 
































/*

    if((nnhh.action === "MEMBER_DISCONNECT")){

        let tkicka = hh.member.user.username;
        let kicka = nnhh.executor.username;
        botroom.send(tkicka + " was kicked by " + kicka);
        console.log(nnhh);
    }
if ((message.mentions.everyone) /*&& (message.channel.id == '597149043793068053')){
    message.delete();
    message.reply("Don't tag everyone");


}*/