const Discord = require("discord.js");

const { MessageEmbed } = require('discord.js');
//Import Packages

module.exports = {
   name: "premium",
   //Name Of The Command
   aliases: ["buypremium","bp","pro-bot","pro","premiumbot"],
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

      const purchasePremiumEmbed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`Hey! I see you want to buy premium. :)`)
      .setDescription(`Well, unfortunately Premium isn't available to purchase right now.\n However here are some of the features to offer from the Premium version of Kiki. `)
      .addFields(
		{ name: 'Priority Support', value: 'By purchasing Premium, and supporting us; you receive a priority support if there\'s errors or bugs within the bot.' },
		{ name: 'Extra Commands', value: 'You\'ll receive extra commands such as: Music commands, extra fun commands, utility commands, access to owner commands (exception of powerful ones.)'},
		{ name: 'Accessibility to change the colo(u)r values', value: 'You\'ll receive the ability to change the values of Embeds, text, responses, etc.'},
        { name: 'Special Roles', value: 'You\'ll receive a role in the support server to outline who you are and what you have done to support the development and production of this application.'},
        { name: 'Noticibility', value: 'You\'ll be able to request 1-1(OneOnOne) support/talks with the owner if she\'s available.'},
        { name: 'Extra Slots', value: 'You\'ll receive Extra Slots for custom Embeds, Commands, and other such customizable features.'},
        { name: 'Early Access', value: 'You\'ll be able to use features earlier than the Public Bot users.(no disadvantage either way.)'},
        { name: 'Shoutouts', value: 'You\'ll receive shoutouts every month you are subscribed to the Premium Access.'},
        { name: 'Staff Chances!', value: 'You will be granted a higher chance of becoming a staff member of the server, primarily for support. **(This will not be a huge advantage)**'},
        { name: 'Dashboard!', value: 'You will be granted access to the Premium Bot\'s Dashboard hosted on it\'s website. (Your servers only ofcourse)'},
        { name: 'Custom Commands', value: 'You\'ll be able to create your own custom commands using our "API" on the Dashboard.'},
        { name: 'IMPORTANT MENTION', value: ' ***ABUSING THIS FEATURE OR ANY FEATURE IN A NEGATIVE WAY FOR OUR REPUTATION, OR IN AN ATTEMPT TO CRASH SERVERS, BOTS, AND/OR USERS WILL RESULT IN EVERYTHING BEING LOGGED, YOU BEING BLACKLISTED FROM ALL OF OUR BOTS, SERVERS AND YOU WILL BE BANNED FROM EVERY SERVER THE BOTS ARE IN. YOU WILL ALSO BE REPORTED TO DISCORD.***'},
	)
      .setFooter(`This bot is hosted and distributed via Keira Hopkins. Reachable at keirabusiness.06@gmail.com`)
      .setTimestamp();
      message.channel.send({embeds: [purchasePremiumEmbed]});
   },
};
