const animes = ['Naruto', 'One Piece', 'DBZ', 'Diego&Glot'];

const animesfn = (anime) => new Promise( (resolve) => {
		setTimeout(() => {
			animes.push(anime)
			resolve(`Agregado: ${animes}`)
		}, 3000);
	})


animesfn('Avatar')
	.then( resultado => {
		console.log(resultado)
		console.log(animes);

		return animesfn('Boruto')
	})
	.then( resultado => {
		console.log(resultado)
		console.log(animes)

		return animesfn('Shippuden')
	})
	.then( resultado => {
		console.log(resultado)
		console.log(animes)
	})




