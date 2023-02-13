const fs = require('fs');
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'savedplaylist',
  description: "Get the songs in the saved playlist",
  showHelp: false,

  execute({ client, inter }) {
    fs.readdir('./savedplaylist', (err, files) => {
      if (err) console.error(err);
      else {
        let fileList = '';
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          fs.readFile(`./savedplaylist/${file}`, 'utf-8', (err, content) => {
            if (err) console.error(err);
            else {
              fileList += `**${i + 1}. ${file.split('.').slice(0, -1).join('.')}, Link: ${content}**\n`;
              if (i === files.length - 1) {
                const embed = new EmbedBuilder()
                  .setColor('#ff0000')
                  .setTitle('List of the saved playlist by the owner')
                  .setDescription(`\n\n${fileList}`)
                  .setFooter({ text: '/play song:(link) to play one of these songs'})

                inter.reply({ embeds: [embed] });
              }
            }
          });
        }
      }
    });
  },
};
