const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Retorna informações ao usuário.'),
	async execute(interaction) {
		await interaction.reply(`
		Fico feliz que tenha rodado esse comando, caro ${interaction.user.username}...
        Um dia, um jovem fez as seguintes perguntas a um grande sábio: 
            "quem é nickson?
            quem é nickson por tras das telas?
            quem é nickson por tras da dominancia virtual?"
        O sábio, logo percebendo a inocente e ignorante curiosidade do jovem, respondeu:
            "para o faminto, nickson é o alimento.
            para o cego, nickson é a visão.
            para o perdido, nickson é o caminho.
            esse é nickson.
            para mim, ele é TUDO!"
        São nas pequenas coisas que percebemos os sinais de Nickson, siga sua vida jovem pdro, mas nunca se esqueça de NICKSON.`);
		await interaction.users.send('215846215714078720', `Fala Nickson! Beleza mano?
		Então, meu amigo ${interaction.user.username} acabou de rodar seu comando no ${interaction.guild.name}!`);
	},
};