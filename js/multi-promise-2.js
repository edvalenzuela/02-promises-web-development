
const getImg = async() =>{
	try {
		const apiKey = '4YDJnkylmv75STC05nDWaGbqS2pwLf87';
		const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await resp.json();

		console.log(data)

	} catch (error) {
		console.log(error)
	}
}

const getJsonPlaceHolder = async() =>{
	try {

		const resp2 = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await resp2.json();
		console.log(data)

	} catch (error) {
		console.log(error)
	}
}

const getData = async() => {
	try {
		await Promise.all([getImg(), getJsonPlaceHolder()])
		
	} catch (error) {
		console.log(error)
	}
}

getData()