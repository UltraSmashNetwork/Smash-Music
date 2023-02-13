module.exports = {
    name: 'stop',
    description: 'Stop the track that is currently playing',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `Music stopped in this server, see you next time ✅`});
    },
};