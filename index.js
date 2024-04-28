// discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
const { Client, Events, GatewayIntentBits } = require('discord.js');

// 設定ファイルからトークン情報を呼び出し、変数に保存します
const { token } = require('./config.json');

// クライアントインスタンスと呼ばれるオブジェクトを作成します
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// クライアントオブジェクトが準備OKとなったとき一度だけ実行されます
client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on(Events.MessageCreate, async (message) => {
  // Check if the message is from the bot itself
  if (message.author.bot) return;

  if(message.content.includes("すし")) {
    message.channel.send("🍣");
    return;
  }

  if(message.content.includes("すず")) {
    message.channel.send("🔔");
    return;
  }
  // Send the message content back to the channel
  // message.channel.send(message.content);
});

// ログインします
client.login(token);