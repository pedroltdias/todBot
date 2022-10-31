const { Client, GatewayIntentBits, Events } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Pronto, ${c.user.tag} esta no ar!`)
});

client.login(token);