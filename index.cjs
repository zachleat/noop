function noopSync(arg) {
	return arg;
}

async function noop(arg) {
	return arg;
}

module.exports = { noop, noopSync };