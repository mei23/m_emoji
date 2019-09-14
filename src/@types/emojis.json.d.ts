declare module '*/emojis.json' {
	interface IEmoji {
		keywords: string[],
		char: string,
		fitzpatrick_scale: boolean,
		category: 'people' | 'animals_and_nature' | 'food_and_drink' | 'activity' | 'travel_and_places' | 'objects' | 'symbols' | 'flags';
	}

	const data: {
		[key: string]: IEmoji
	};

	export = data;
}

