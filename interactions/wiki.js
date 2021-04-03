const {MessageEmbed} = require('discord.js');
const parse_page = require('../../functions/parse_page.js');
const phabricator = require('../../functions/phabricator.js');
const logging = require('../../util/logging.js');
const {htmlToDiscord, partialURIdecode} = require('../../util/functions.js');
const extract_desc = require('../../util/extract_desc.js');
const {limit: {interwiki: interwikiLimit}, wikiProjects} = require('../../util/default.json');
const Wiki = require('../../util/wiki.js');
const {wikis: mcw} = require('../minecraft/commands.json');

/**
 * Post a message with inline wiki links.
 * @param {Object} interaction - The interaction.
 * @param {import('discord.js').Client} interaction.client - The client of the interaction.
 * @param {import('../util/i18n.js')} lang - The user language.
 * @param {import('../util/wiki.js')} wiki - The wiki for the interaction.
 * @param {import('discord.js').TextChannel} [channel] - The channel for the interaction.
 */

const fs = require('fs');
var fn = {
	special_page: require('../../functions/special_page.js'),
	discussion: require('../../functions/discussion.js')
};

function wiki_slash(lang, msg, title, wiki, cmd, reaction, spoiler = '', querystring = new URLSearchParams(), fragment = '', interwiki = '', selfcall = 0)
{
  
};

function sendMessage(interaction, message, channel) {
	return interaction.client.api.webhooks(interaction.application_id, interaction.token).messages('@original').patch( {
		data: message
	} ).then( msg => {
		if ( channel ) allowDelete(channel.messages.add(msg), ( interaction.member?.user.id || interaction.user.id ));
	}, log_error );
}

module.exports = {
	name: 'inline',
	run: slash_inline
};
