module.exports = {
    app: {
        token: 'YOUR-BOT-TOKEN',
        playing: 'Smash Music Testing',
        global: true,
        guild: 'YOUR-GUILD-ID' 
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
