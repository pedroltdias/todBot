const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Retorna informações ao usuário.'),
	async execute(interaction) {
		await interaction.reply(`Quem rodou esse comando foi ${interaction.user.username}, entrou no servidor em ${interaction.member.joinedAt}.`);
	},
};