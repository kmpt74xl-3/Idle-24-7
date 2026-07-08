const { Client, ActivityType } = require('discord.js');

const client = new Client({ intents: [] });

client.once('ready', () => {
  console.log(`✅ الحساب Idle 24/7: ${client.user.tag}`);
  
  setInterval(() => {
    client.user.setPresence({
      status: 'idle',
      activities: [{
        name: 'Wild Rift',
        type: ActivityType.Playing
      }]
    });
  }, 30000);
});

client.login(process.env.TOKEN);
