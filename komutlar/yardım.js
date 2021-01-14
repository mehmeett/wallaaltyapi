const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
  const emoji = client.emojis.get('699165094898040893');
  
  const yardım = new Discord.RichEmbed()
.setDescription(`
${emoji} **GENEL KOMUTLAR** ${emoji}
[+] -ses-kanal-aç <- Ses Kanalı Açar.
[+] -çekilişyap <- Çekiliş Yapar.
[+] -temizle (sayı) <- Chati Siler.

${emoji} **Eğlence Komutları** ${emoji}
[+] -yazı-tura     <- Yazı Tura Oynar.
[+] -stresçarkı     <- Stres Çarkı Çevirir.
[+] -avatar         <- Avatarını Gösterir.
`,true);
  
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Yardım.',
  usage: 'yardım'
};