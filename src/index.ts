import * as debug from 'debug';

import * as emojis from '../emojis.json';

const log = debug('emojis');
debug.enable('*');

async function main() {
	for (const [name, emoji] of Object.entries(emojis)) {
		const twe = char2file(emoji.char);
		console.log(name);
		console.log(twe);
	}
}

/**
 * to twemoji filename
 */
const char2file = (char: string) => {
	let codes = Array.from(char).map(x => x.codePointAt(0).toString(16));
	if (!codes.includes('200d')) codes = codes.filter(x => x != 'fe0f');
	codes = codes.filter(x => x && x.length);
	return codes.join('-');
};

main();
