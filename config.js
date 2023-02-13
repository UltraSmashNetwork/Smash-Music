module.exports = {
    app: {
        token: 'MTA3MzkxMjc5ODEwMDMzMjU2NA.G688mZ.RSCN1o7veohBVUlucFHuB6KBRTmP4SOeApcQ0M',
        playing: 'Smash Music Testing',
        global: true,
        guild: '1005733828104552448' 
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
