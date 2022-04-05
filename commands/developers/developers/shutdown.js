const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
//Import Packages

module.exports = {
   name: "shutdown",
   //Name Of The Command
   aliases: ["sd", "shd", "shutd","sdown","serverdown"],
   //Aliases For Command.
   cooldowns: 1000, //1 second
   //Cooldown For The Command [Milliseconds]
   description: "This Command Notifies about a server being shutdown.",
   //Description Of The Command [The Purpose Etc...]
   usage: "",
   //Usage For Command. [like ?nameOfTheCommand <user> <reason>]
   toggleOff: false,
   //Disable The Command If Emergency. [true = off | false = on]
   developersOnly: false,
   //If Command Is Only For Bot Owners. [true = yes | false = no]
   /*
    To Make Yourself Developer, Go Ahead to 
    botconfig/main.json, set the ids in it. 
*/
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   //Permissions Required For The Author To Use The CMD.
   botpermissions: ["ADMINISTRATOR"],
   //Permissions Required For The Bot To Run The CMD.

   run: async (client, message, args) => {
      const member = message.mentions.members.first();

      const sendEmbed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`API ERROR`)
      .setDescription(`Something has caused an error in the bot..\n\nYou're gonna have to wait a little `)
      .setTimestamp()

      message.channel.send(`@everyone`);
      message.channel.send({embeds: [sendEmbed]});
   },
};
