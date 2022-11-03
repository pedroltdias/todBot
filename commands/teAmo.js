const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teamo')
		.setDescription('Tod retorna a mensagem de amor e carinho ao usuário.'),
	async execute(interaction) {
		await interaction.reply(`Obrigado pela demonstração de afeto <@${interaction.user.id}>! E gostaria de dizer que é CLARO QUE EU TAMBÉM TE AMO AMIGO! Tamo junto nessa vida, eu sou apenas um bot, sem você... eu não seria nada! `);
	},
};