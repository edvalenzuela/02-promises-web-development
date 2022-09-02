
const downloadDataClients = () => {
	return new Promise( resolve => {
		console.log('Descargando data del cliente')

		setTimeout(() => {
			resolve('Data OK')
		}, 3000);

	})
}

const downloadData = () => {
	return new Promise( resolve => {
		console.log('Descargando data web')

		setTimeout(() => {
			resolve('Data web OK')
		}, 3000);

	})
}

const getData = async() => {
	try {
		const [ client, dataClient ] = await Promise.all([downloadDataClients(), downloadData()])
		console.log(client, dataClient)
		/* const clients = await downloadDataClients();
		console.log(clients)

		const clientsData = await downloadData();
		console.log(clientsData) */

		
	} catch (error) {
		console.log(error)
	}
}

getData()