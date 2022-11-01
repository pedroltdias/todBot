const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with Pong!"),
	async execute(interaction) {
		await interaction.reply("Pong!");
		await wait(10000);
		await interaction.reply("PONG PORRA!");
	},
};