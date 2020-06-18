const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ma-botclan.glitch.me/`);
}, 280000);



const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "!";
const prefix = "+";
const developers = ["278245995895324672" , ""];
client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
   client.user.setGame("Ma The Best", `https://www.twitch.tv/osama_gmt`);
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  } else
    if (message.content.startsWith(adminprefix + 'setn')) {
        client.user.setUsername(argresult);
      message.channel.send(``)
    }
});

client.on("message", async message => {
  if(message.channel.type === "dm") return;
  var args = message.content.split(' ').slice(1); 
  if (message.author.id === client.user.id) return; 
  if (message.guild) { 
    let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') { 
      if (!args[1]) {message.channel.send(`**${prefix}bc <message>**`);return;} 
      message.guild.members.forEach(m => { 
        if (!developers.includes(message.author.id)) 
          return; 
        m.send(args); }); 
      message.delete(); } } 
  else { return; } });

client.on("message", message => {
const args = message.content.split(' ').slice(1).join(' ');
   if (message.content.startsWith(prefix + 'ban')) {
if (!message.channel.guild) return message.reply('**This command only for servers ❌**');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد اعطائه كيك**");
  message.guild.member(user).ban(7, user);
message.channel.send(`**✅ ${user.tag} ban from the server ! :airplane:  **  `)
}
});

client.on('message', async M =>{
const args = M.content.split(' ').slice(1).join(' ')
if (M.content.startsWith(prefix + 'kick')) {
if (!M.channel.guild) return M.reply('**This command only for servers ❌**');         
  if(!M.guild.member(M.author).hasPermission("KICK_MEMBERS")) return M.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!M.guild.member(client.user).hasPermission("KICK_MEMBERS")) return M.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = M.mentions.users.first();
  if (M.mentions.users.size < 1) return M.reply("**منشن شخص**");
  if (!M.guild.member(user)
  .bannable) return M.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد اعطائه كيك**");
  M.guild.member(user).kick(7, user);
M.channel.send(`**✅ ${user.tag} kick from the server ! ✈️ **  `)
}
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");

    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> ${ms(ms(mutetime))} : **تم اعطائه ميوت ومدة الميوت**`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});


client.on('message', message => {
    if (message.content === 'elbacha' ){
      message.channel.send(`elbacha m9wd`)
    }
});

client.on('message', message => {
    if (message.content === 'tag' ){
      message.channel.send(`ˣℳ͢ᴀ♚`)
    }
});


client.on('message', message => {
    if (message.content === '3rb' ){
      message.channel.send(`90.85.179.78`)
    }
});


client.on('message', message => {
    if (message.content === 'uk' ){
      message.channel.send(`156.61.53.42`)
    }
});


client.on('message', message => {
    if (message.content === 'usa' ){
      message.channel.send(`207.69.188.187`)
    }
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'ma-chat');
      channel.send(`${member}, مرحبا بك فسيرفر ˣℳ͢ᴀあ! نتمنى ان تقضي وقت ممتعا معنا :wink: !`);
    });

client.on('guildMemberRemove', member => {
  
  const channel = member.guild.channels.find("name", "ma-chat");
 
  channel.send(`${member.user.tag}. غادر او تمت ازالته من طرف مسؤول`)
});

client.on('message', message => {
    if (message.content == "لغز") {
        var x = ["ماهو الشيء الذي يكتب و لا يقرأ ؟",
        "ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟",
        "ماهو الشيء الذي كلما زاد نقص ؟",
        "ما هو الشيء الذي لا يمشي إلا بالضرب ؟",
        "ما هو الشيء الذي إذا أخذنا منه إزداد وكبر ؟ ",
        "له أسنان ولا يعض، ما هو ؟",
        "يتحرك دائماً حواليك لكنك لاتراه فما هو ؟ ",
        "ما هو البيت الذي ليس فيه ابواب ولا نوافذ ؟",
        "ما هو الشيء الذي إذا غليته جمد ؟",
        "ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟",
        "ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟",
        "ما هو الشيء الذي اسمه على لونه ؟",
        "له أوراق وما هو بنبات، له جلد وما هو بحيوان، وعلم وما هو بإنسان. من هو ؟",
        "ما هو الشيء الذي يقرصك ولا تراه ؟",
        "ما هو الشيء الذى ليس له بداية ولا نهاية ؟",
        "ما هو الشّيء الذي يستطيع المشي بدون أرجل والبكاء بدون أعين؟",
        " ما هو الشّيء الذي يتكلّم بدون لسان ويسمع بدون أذن؟",
        " ما هو الشّيء الذي يتبع الكلب أينما حلّ وآرتحل؟",
 
];
        var x2 = ["القلم",
        "الشاي",
        "العمر",
        "المسمار",
        "الحفرة",
        "المشط",
        "الهواء",
        "بيت الشعر",
        "البيض",
        "البحر",
        "الساعة",
        "البيضه",
        "الكتاب",
        "الجوع",
        "الدائرة",
        "السحاب",
        "الهاتف",
        "ذيله",
       
       
        ];
       
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  __**${x[x3]}**__
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
       
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

client.on("message", async message => {
if(message.channel.type === "dm") return;
var args = message.content.split(' ').slice(1);
          if(message.content === (prefix + "moveall")) {
             if (!message.channel.guild) return message.reply('**This command only for servers ❌**');
             if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
             if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
             if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
             var author = message.member.voiceChannelID;
             var m = message.guild.members.filter(m=>m.voiceChannel)
             message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
             m.setVoiceChannel(author)
             })
             message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
            
            
             }
});


client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel(" VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});

client.on('message', async M => {
    var args = M.content.split(' ').slice(1).join(' ');
    if (M.content.toLowerCase().startsWith(prefix + "clear")) {
        M.delete('');
    if (!M.channel.guild) return; 
    if (M.member.hasPermission('MANAGE_MESSAGES')){
    let count = args[0] || 100; 
    let messagecount = parseInt(count); 
    console.log('clear');
        M.channel.fetchMessages({limit: messagecount}) 
            .then( messages => { count = messages.array().length;
        M.channel.send(`\`\`\`javascript
عدد الرسائل التي تم مسحها :  ${count} \`\`\``).then(m => m.delete(2500)); 
        M.delete(60000); return messages; 
}).then(messages => M.channel.bulkDelete(messages));
}}});


client.on('message' , message => {;
  if(message.author.bot) return;

    if(message.content.startsWith('+xo')) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `مباراة بين <@${player1_id}> و <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(من الخاسر, انت تلعب هذا الدور مع نفسك :joy:)_'
    }
    message.channel.send(`xo! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful xo game initialization"))
    .catch(console.error);
    message.channel.send('يتم تحميل... انتظر الريئاكشن :ok:')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`انه دور <@${turn_id}> علامتك هي${symbol}`)
      .then((new_new_message) => {
        require('./SC.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful xo listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful xo react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_مهلا مهلا_ :anger: \`(استعمل هذا: ${prefix}xo @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });














client.login("NzAzMjc0NTk3MDI5NzczMzkz.XurH0w.yTjZsLcWaS-ifbWsroYzGUzsUQ0");
