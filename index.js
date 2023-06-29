// Require the necessary discord.js classes
const {
    Client,
    Events,
    GatewayIntentBits,
    IntentsBitField,
} = require("discord.js");
const { token } = require("./config.json");

//Little error handler
if (token === "Please enter your bot token here!") {
    console.log("Enter your bot token in config.json before starting.");
} else {
    // Create a new client instance
    const client = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,
        ],
    });

    // When the client is ready, run this code (only once)
    // We use 'c' for the event parameter to keep it separate from the already defined 'client'
    client.once(Events.ClientReady, (c) => {
        console.log("Ready! Logged in as ${c.user.tag}");
    });

    client.on("messageCreate", (messsage) => {
        console.log(messsage.content);
        console.log(messsage.author.id);
        console.log(typeof messsage.author.id);
    });

    // Log in to Discord with your client's token
    client.login(token);
}
