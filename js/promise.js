

const descuentoX = new Promise( (resolve, reject ) => {

	const isDescuento = false;

	if(isDescuento){
		resolve('Se aplico el descuento correctamente!!!')
	}else{
		reject('No se realizado el descuento!!!')
	}

})

descuentoX
	.then( console.log )
	.catch( console.warn )
