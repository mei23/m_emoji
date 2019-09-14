declare module '*/emojilist.json' {
	interface IEmojiItem {
		name: string;
		keywords: string[];
		char: string;
		category: 'people' | 'animals_and_nature' | 'food_and_drink' | 'activity' | 'travel_and_places' | 'objects' | 'symbols' | 'flags';
	}

	const data: IEmojiItem[];

	export = data;
}

