import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../classes/Command';

export default new Command({
	id: 'alts',
	config: () => ({
		slash: new SlashCommandBuilder()
			.setName('alts')
			.setDescription('View the available alts.'),
	}),
	run: async ({ client, interaction }) => {
		if (!interaction.inCachedGuild())
			return interaction.reply({
				content: 'Invalid guild.',
				ephemeral: true,
			});

		console.log(client.alts);

		return interaction.reply('Work in progress');
	},
});