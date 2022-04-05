const Discord = require("discord.js");

const { MessageEmbed } = require('discord.js');
//Import Packages

module.exports = {
   name: "about-user",
   //Name Of The Command
   aliases: ["whois"],
   //Aliases For Command.
   cooldowns: 1000, //1 second
   //Cooldown For The Command [Milliseconds]
   description: "This Command Tells About You",
   //Description Of The Command [The Purpose Etc...]
   usage: "<user>",
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

      const kirasembed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`Keira's Description`)
      .setDescription('Kira is a really cool person, She is the Community Manager.\nShe is incredibly good at her job.')
      .setTimestamp();

      const foxembed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`CC-1010 "Fox"'s Description`)
      .setDescription('CC-1010, nicknamed "Fox", was a clone trooper officer.\nWho went on to serve as the Clone Commander of the Coruscant Guard during the Clone Wars.\nWhile the Grand Army of the Republic deployed across the galaxy under the command of Jedi Generals,\nCommander Fox and his clone shock troopers were stationed on Coruscant, the capital planet of the Galactic Republic. ')
      .setTimestamp()

      const wolfembed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`CC-3636 "Wolf"'s Description`)
      .setDescription('CC-3636 otherwise known as "Wolffe",\nWas a clone commander during the Clone Wars who served as the 104th Commander unofficially known as "Wolfpack".')
      .setTimestamp()

      const NILembed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`CC-1010 "Fox"'s Description`)
      .setDescription('CC-1010, nicknamed "Fox", was a clone trooper officer.\nWho went on to serve as the Clone Commander of the Coruscant Guard during the Clone Wars.\nWhile the Grand Army of the Republic deployed across the galaxy under the command of Jedi Generals,\nCommander Fox and his clone shock troopers were stationed on Coruscant, the capital planet of the Galactic Republic. ')
      .setTimestamp()

      if (!member) return message.reply("Provide Some User To Tell About...");
      else if (member==('801384603704623115')) return message.channel.send({embeds: [kirasembed] });
      else if (member==('407938499120070677')) return message.channel.send({embeds: [foxembed]});
      else if (member==('670834803989544992')) return message.channel.send({embeds: [wolfembed]});
      else if (member==('NIL')) return message.reply(`${member}'s bio: \`NIL \` `);
      else if (member==('NIL')) return message.reply(`${member}'s bio: \`NIL \` `);
      message.reply(`I haven't been given a bio for ${member} D:`);
   },
};
