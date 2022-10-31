const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Retorna informações do servidor'),
	async execute(interaction) {
		await interaction.reply(`O nome desse servidor é ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`);
	},
};