const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
//Import Packages

module.exports = {
   name: "rules",
   //Name Of The Command
   aliases: ["ToS", "CGs", "rulereminder"],
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
      const rulesEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('RULES')
      .setDescription('These are Clone Army Community\'s rules.')
      .setThumbnail('https://ichef.bbci.co.uk/images/ic/448xn/p085mwhc.png')
      .addFields(
         { name: '1.', value: ' No Profanitarious/Inappropriate words(fanny,vagina,dick,sex,penis,etc.).' },
         { name: '2.', value: 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will not be tolerated.'},
         { name: '3.', value: 'No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.'},
         { name: '4.', value: 'If you don\'t know if something is allowed, ask! Do not just follow through and meet the consequences.'},
         { name: '5.', value: 'No NSFW or obscene content. This includes text, images, or links featuring  graphically disturbing content. Actions do not go unpunished.'},
         { name: '6.', value: 'If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!'},
         { name: '7.', value: 'All Republic channels must be C.A.R. or Star Wars related with the exception of the #general-frequency channel.'},
         { name: '8.', value: 'Any Other rules will be posted within our Discord. Remember to check regularly.'},
      )
      .setTimestamp()
      .setFooter({ text: 'FROM enlist-information CHANNEL'});

   message.channel.send({ embeds: [rulesEmbed] });
   },
};
