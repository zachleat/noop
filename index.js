function noopSync(arg) {
	return arg;
}

async function noop(arg) {
	return arg;
}

export { noop, noopSync }