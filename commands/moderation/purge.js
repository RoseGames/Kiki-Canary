const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
//Import Packages

module.exports = {
   name: "purge",
   //Name Of The Command
   aliases: ["clear", "delete", "clr","dlt","prg"],
   //Aliases For Command.
   cooldowns: 1000, //1 second
   //Cooldown For The Command [Milliseconds]
   description: "This Command Purges messages.",
   //Description Of The Command [The Purpose Etc...]
   usage: "<amount>",
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
    var amount = parseInt(args[0])
    const purgeFailEmbed = new MessageEmbed()
        .setColor('#FC94AF')
        .setTitle(`Failed to purge due to...`)
        .setDescription(`No amount to purge given.`)
        .setTimestamp()
    const purgeFailEmbed2 = new MessageEmbed()
        .setColor('#FC94AF')
        .setTitle(`Failed to purge due to...`)
        .setDescription(`Too many messages to purge.`)
        .setTimestamp()
    const purgeFailEmbed3 = new MessageEmbed()
        .setColor('#FC94AF')
        .setTitle(`Failed to purge due to...`)
        .setDescription(`:x: Messages are too old. (14 days+)`)
        .setTimestamp()
    const purgeSucessEmbed = new MessageEmbed()
        .setColor('#FC94AF')
        .setTitle(`Purged Messages!`)
        .setDescription(`\`${amount}\` messages have been purged.`)
        .setTimestamp()

        if (!amount) return message.channel.send({embeds: [purgeFailEmbed]})
        if (amount > 1000 || amount < 1) return message.channel.send({embeds: [purgeFailEmbed2]})

        message.channel.bulkDelete(amount).catch(err => {
            message.channel.send({embeds: [purgeFailEmbed3]}) })

        let msg = await message.channel.send({embeds: [purgeSucessEmbed]})
        setTimeout(() => {
            msg.delete()
        }, 15000);
   },
};
