const Dlang = require('discordbot-script');
const bot = new Dlang({
	token: "TOKEN",//.env de 
	prefix: ['!']
});

bot.MessageEvent();
bot.Command({
		name: 'ban',
		code: `
$globalBan[$message[1];$get[sebep];sw_id1;sw_id2;sw_id3] 
$dm[$message[1]]
$title[Banlandın]
$description[ Companydeki Tüm Sunuculardan Ban Yedin İtiriaz Etmek İstersen İtiraz Sunucumuza Girebilirsin]
$color[303136]
$channelSendMessage[$channelID;{title:Kişi Başarıyla Banlandı}{description:**Banlanan Kişi:** <@$message[1]>}{footer:| Komutu Kullanan Kişi $username#$discriminator}{color:303136}]
$deletecommand
$let[sebep;$messageSlice[>1]]
$onlyIf[$messageSlice[>1]!=;❌Sebep Belirtmeden Bak Banladın Şuan]
$onlyIf[$message[1]!=$clientID;❌Beni Niye Banlıyon Amk]
$onlyIf[$message[1]!=$authorID;❌ Manyak Mısın Kardeş Sensin Bu]
$onlyIf[$charCount[$message[1]]==18;❌Lan Doğru ID Girmeyip Beni Mi Kandırıyon]
$onlyIf[$message[1]!=;❌Komutu Düzgün Kullan]
$onlyForUsers[kullanacak_kişi_id1;kullanacak_kişi_id2;❌Yetkin Yok XD]
`
	});