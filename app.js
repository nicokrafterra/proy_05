require('colors')

const text = require(`./functions/text`)
const main = async() =>{
    console.clear()
    let nombres= ("Juan")
    let  apellidos= ("Orjuela")
    let nombrecompleto = nombres[0].toUpperCase()+nombres.substring(1).toLocaleLowerCase() + " " + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase()
    
    const nombre1 = nombrecompleto
    text.mostrarNombreSecuencial(nombre1)
    const nombre2= nombrecompleto
    text.mostrarNombreSecuencialImvertido(nombre2)
    console.log(nombres.toUpperCase().blue+" ".blue+apellidos.toUpperCase().blue)
    console.log(nombres.toLowerCase().blue+" ".blue+apellidos.toLowerCase().blue)
    console.log(nombrecompleto.blue)
}


main();