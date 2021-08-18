module.exports = {
	isEmptyObject: (object) => {
		Object.keys(object).length === 0 && object.constructor === Object
	},
	getRandomElementFromArray: (array) => {
		let items = Array.from(array)
		return items[Math.floor(Math.random() * items.length)]
	}
}
