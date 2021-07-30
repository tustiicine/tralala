/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
✅Giveaway is now officially launched !! 
✅You can win one of thousands rewards:

🔹From 0.1 ETH to 1 ETH
🔸From 0.33 BNB to 3.5 BNB 
🔺From 1000 TRX to 5000 TRX
🔸From 500 DOGE to 1000 DOGE 
💠More great Prizes!  

  ANSWER
  keyboard: 🎁Airdrop, 💰Balance, \n👤Support, ⚙️Settings, ❓FAQ
  aliases: 📜menu
CMD*/

var buttons = [
  {title: "Check Reward", command: "/import"},
  {title: "Read More", command: "/read" }
];
Bot.sendInlineKeyboard(buttons," ");

