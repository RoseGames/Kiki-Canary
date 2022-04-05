const {
    Client,
    Message,
    MessageEmbed,
    Discord
} = require('discord.js');
const permitteduserids = require("../../botconfig/main.json");
module.exports = {
    name: "ban",
    //Name Of The Command
    aliases: ["remove-user", "fuckyou", "banhammermoment","banhammer"],
    //Aliases For Command.
    cooldowns: 1000, //1 second
    //Cooldown For The Command [Milliseconds]
    description: "This Command Bans A User.",
    //Description Of The Command [The Purpose Etc...]
    usage: "<user> <reason>",
    //Usage For Command. [like ?nameOfTheCommand <user> <reason>]
    toggleOff: false,
    //Disable The Command If Emergency. [true = off | false = on]
    developersOnly: false,
    //If Command Is Only For Bot Owners. [true = yes | false = no]
    /*
     To Make Yourself Developer, Go Ahead to 
     botconfig/main.json, set the ids in it. 
 */
    userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL","BAN_MEMBER","KICK_MEMBER"],
    //Permissions Required For The Author To Use The CMD.
    botpermissions: ["ADMINISTRATOR"],
    //Permissions Required For The Bot To Run The CMD.
    run: async (client, message, args, Discord) => {
        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        const waitBanEmbed = new MessageEmbed()
        .setColor('#FC94AF')
       .setTitle(`Failed to ban...`)
       .setDescription(`Provide a user to ban...`)
       .setTimestamp()
        const successBanEmbed = new MessageEmbed()
        .setColor('#FC94AF')
       .setTitle(`Banned!`)
       .setDescription(`Banned ${user} from the server for the reason:***${reason}***. `)
       .setTimestamp()
       const noPermsEmbed = new MessageEmbed()
       .setColor('#FC94AF')
      .setTitle(`Insufficient Permissions!`)
      .setDescription(`You do not have permission to ban ${user} from the server.`)
      .setTimestamp()
        if (!reason) return message.channel.send({embeds: [waitBanEmbed]});
        if (user) {
            await user.ban({
                reason: reason,
            }).then(() => {
                message.channel.send({embeds: [successBanEmbed] });
            })
        } else {
            message.channel.send('cant find the user!')
        }
    }
}