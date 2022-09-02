
const apiKey = '4YDJnkylmv75STC05nDWaGbqS2pwLf87';

const dataApi = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

dataApi
	.then( resp => resp.json())
	.then( ({data}) => {
		
		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;

		document.body.append(img)
	})
	.catch(err => console.warn(err))
