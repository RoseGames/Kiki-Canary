const {
    Client,
    Message,
    MessageEmbed,
    Discord
} = require('discord.js');
module.exports = {
    name: "kick",
    //Name Of The Command
    aliases: ["kek","kck"],
    //Aliases For Command.
    cooldowns: 1000, //1 second
    //Cooldown For The Command [Milliseconds]
    description: "This Command Kicks a user.",
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
    userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    //Permissions Required For The Author To Use The CMD.
    botpermissions: ["ADMINISTRATOR"],
    //Permissions Required For The Bot To Run The CMD.
    run: async (client, message, args, Discord) => {
        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        const WaitKickEmbed = new MessageEmbed()
        .setColor('#FC94AF')
       .setTitle(`Failed to kick...`)
       .setDescription(`Please provide a user to kick. `)
       .setTimestamp()
        const successKickEmbed = new MessageEmbed()
        .setColor('#FC94AF')
       .setTitle(`Banned!`)
       .setDescription(`Kicked ${user} for:***${reason}***. `)
       .setTimestamp()
        if (!reason) return message.channel.send({embeds: [WaitKickEmbed]});
        if (user) {
            await user.kick({
                reason: reason,
            }).then(() => {
                message.channel.send({embeds: [successKickEmbed] });
            })
        } else {
            message.channel.send('cant find the user!')
        }
    }
}