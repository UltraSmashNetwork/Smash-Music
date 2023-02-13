const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'Enable or disable looping of a song or the whole playlist',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'What action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.loopMode === 1) return inter.reply({ content:`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setLoopMode( QueueLoopMode.QUEUE);

                return inter.reply({ content:success ? `Loop mode **enabled** the whole queue will be repeated endlessly 🔁` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setLoopMode(QueueLoopMode.OFF);

                return inter.reply({ content:success ? `Loop mode **disabled**` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.loopMode === 2) return inter.reply({ content:`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setLoopMode( QueueLoopMode.TRACK);
                
                return inter.reply({ content:success ? `Loop mode **enabled** the current song will be repeated endlessly (you can end the loop with /loop disable)` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
        }
       
    },
};