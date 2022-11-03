const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ohnickson')
		.setDescription('Retorna informações ao usuário.'),
	async execute(interaction) {
		await interaction.users.send('215846215714078720', `Fala Nickson! Beleza mano?
		Então, meu amigo ${interaction.user.username} acabou de rodar seu comando no ${interaction.guild.name}!`);
	},
};