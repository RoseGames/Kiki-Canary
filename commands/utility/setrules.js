const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
   name: "setrules",
   aliases: ["sr"],
   cooldowns: 3000,
   description: `This command sets the c?rules information.`,
   usage: "",
   toggleOff: true,
   developersOnly: true,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   /* run: async (client, message, args) => {
       const rules = message.content.split(' ');
       const servername = guild.servername();
       const rulesEmbed = new MessageEmbed()
        .setColor('#FC94AF')
        .setTitle(`${servername}'s Rules.`)
        .setDescription('PLEASE READ THE RULES BEFORE CAUSING CHAOS.')
        .addFields{
            .addField()}
        .setTimestamp(),

        if (message.content.length < 1) return message.channel.send('Write a rule will ya..');
   }, */
};