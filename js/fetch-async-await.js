
const getImg = async() =>{
	try {
		const apiKey = '4YDJnkylmv75STC05nDWaGbqS2pwLf87';
		const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await resp.json();

		//const resp2 = await fetch('https://jsonplaceholder.typicode.com/posts')
		//const data = await resp2.json();

		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;

		document.body.append(img)

	} catch (error) {
		console.log(error)
	}
}

getImg()

