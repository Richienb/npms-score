const test = require("ava")
const npmsScore = require(".")

test("main", async (t) => {
	const { quality, popularity, maintenance } = await npmsScore("cross-spawn")

	t.is(typeof quality, "number")
	t.is(typeof popularity, "number")
	t.is(typeof maintenance, "number")
})
