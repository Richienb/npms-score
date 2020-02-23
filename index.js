"use strict"

const { info } = require("npms-api")

module.exports = async (name) => {
	const { score } = await info(name)
	return score.detail
}
