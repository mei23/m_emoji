import * as emojis from '../emojis.json';

async function main() {
	const a = [];
	for (const [name, emoji] of Object.entries(emojis)) {
		a.push({
			category: emoji.category,
			char: emoji.char,
			name,
			keywords: emoji.keywords,
		})
	}

	let s = JSON.stringify(a);
	s = s.replace(/},/g, '},\n');
	s = s.replace(/^\[{/, '[\n{');
	s = s.replace(/}\]/g, '}\n]');
	console.log(s);
}

main();
