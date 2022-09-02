const animes = ['Naruto', 'One Piece', 'DBZ', 'Diego&Glot'];

const addAnime = (anime, callback) => {

	animes.push(anime);
	console.log(`Se agrego el anime : ${anime}`)
	callback();
}

const showAnime = () => {
	console.log(animes)
}

const getCallback = () => {
	setTimeout(() => {
		addAnime('Arnold', showAnime);

		setTimeout(() => {
			addAnime('Corage', showAnime);

			setTimeout(() => {
				addAnime('Dragon ball gt', showAnime);
			}, 3000);

		}, 3000);

	}, 3000);
}

getCallback();

