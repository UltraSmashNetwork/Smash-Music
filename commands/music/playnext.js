const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "Song you want to play next",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'The name of the song you want to play next',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
	await inter.deferReply();
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.editReply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.editReply({ content: `No results found ${inter.member}... try again ? ❌`, ephemeral: true });

       if (res.playlist) return inter.editReply({ content: `This command dose not support playlists ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.editReply({ content:`Track has been inserted into the queue... it will be played next 🎧`});

    }
}
