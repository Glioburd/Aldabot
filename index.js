const utils = require("./utils.js")
const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client()
const targets = config.targets
const usersToHate = targets.hateTargets
const usersToLove = targets.loveTargets
const hateEmojis = config.hateEmojis
const loveEmojis = config.loveEmojis

/**
 * Check if the author of the message if one of the monitored users.
 * @param {Message} msg
 * @param {Array} users
 * @returns {boolean}
 */
function mustReactOnThisMsg(msg, users) {
	return users.some(
		(e) =>
			e.username === msg.author.username &&
			e.discriminator === msg.author.discriminator
	)
}

/**
 * Check if there are some targets from the config file.
 * Basically, this is to prevent the bot to monitor every new
 * messages for nothing if there are no user to seek.
 * @param {object} targets
 * @returns {boolean}
 */
function areThereTargets(targets) {
	return (
		(!utils.isEmptyObject(targets) &&
			!utils.isEmptyObject(targets.hateTargets)) ||
		!utils.isEmptyObject(targets.loveTargets)
	)
}

/**
 * Return a random emoji from its category (love/hate).
 * Returns a string if it's a normal emoji : like 🙂
 * and returns a emojis.cache.get result in case of a custom emoji.
 * @param {Array} array 
 * @returns {*}
 */
function getRandomEmoji(array) {
	const emoji = utils.getRandomElementFromArray(array)
	return emoji.length > 2 ? bot.emojis.cache.get(emoji) : emoji
}

/**
 * Put a reaction on the message if the new message is from a monitored user.
 * @param {Discord.message} msg
 * @returns {void}
 */
function react(msg) {
	if (mustReactOnThisMsg(msg, usersToHate)) {
		msg.react(getRandomEmoji(hateEmojis)).catch(console.error)
	} else if (mustReactOnThisMsg(msg, usersToLove)) {
		msg.react(getRandomEmoji(loveEmojis)).catch(console.error)
	}
}

bot.login(config.token)

bot.on("message", (msg) => {
	if (areThereTargets(targets)) {
		react(msg)
	}
})
