const Discord = require("discord.js");
const { MessageEmbed }= require("discord.js");
module.exports = {
   name: "setup",
   aliases: ["serverstart", "stp"],
   cooldowns: 3000,
   description: "This command sets up your server to be used with our bot.",
   usage: "",
   toggleOff: true,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
      const author = message.author;
      client.database = database.db('jonin')
      client.database.listCollections().toArray(async (error, collections) => {
         if (collections.length < 1) {
            client.error(`Required Database not found!`)
            client.db = false
            return database.close()
         }
         if (error) client.error(error)
            let [required, exists] = [['data', 'guilds', 'config', 'commands'], []]
            collections.forEach(collection => exists.push(collection.name))
            for (const collection of required) !exists.includes(collection) ? await client.database.createCollection(collection, error => error ? client.error(error) : void 0) : void 0
         })
       const CompletedEmbed = new MessageEmbed()
	   .setColor('#FC94AF')
      .setTitle(`Setup complete!`)
      .setDescription()
      .addFields(
		{ name: 'These things were added to your server!'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Mute Role?', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
      .setTimestamp()
   },
};
