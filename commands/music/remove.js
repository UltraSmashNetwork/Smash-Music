const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "Remove a song from the queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'The name/url of the track you want to remove',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'The place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `You have to use one of the options to remove a song ${inter.member}... try again ? ❌`, ephemeral: true });

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `Removed ${track} from the queue ✅` });
            }

        }

        return inter.reply({ content: `Could not find ${track} ${inter.member}... try using the url or the full name of the song ? ❌`, ephemeral: true });    
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `This track dose not seem to exist ${inter.member}...  try again ?❌`, ephemeral: true });   

            queue.remove(index);
            
            return inter.reply({ content: `Removed ${trackname} from the queue ✅` });
        }


         
    }
}