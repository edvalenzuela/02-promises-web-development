const animes = ['Naruto', 'One Piece', 'DBZ', 'Diego&Glot'];

const addAnime = (anime, callback) => {

setTimeout( () => {
	animes.push(anime);
	callback()
}, 2000)

}

const showAnime = () => {
setTimeout( () => {
	animes.forEach( a => {
		console.log(a)
	} )
}, 1000)
}

addAnime('Shinchan', showAnime)
addAnime('Shinchan2', showAnime)
addAnime('Shinchan3', showAnime)

