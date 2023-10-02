const text = {};

const mostrarNombreSecuencialImvertido = (nombre) => {
    let nombres = nombre.length - 1;
    let nombreCompleto = '';
    let nums = 1
    while (nombres >= 0) {
        nombreCompleto = nombreCompleto + nombre[nombres];
        console.log(nums+"  "+nombreCompleto.green);
        nombres--;
        nums ++;
    }
};

const mostrarNombreSecuencial = (nombre) => {
    let nombres= ("Juan")
    let  apellidos= ("Orjuela")
    let nombrecompleto = nombres[0].toUpperCase()+nombres.substring(1).toLocaleLowerCase() + " " + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase()
    let textos = nombrecompleto.length  
    while(textos>0){
        console.log  (textos + "  ".red + nombrecompleto.substring(0,textos).red);
        textos--;
    }
}

text.mostrarNombreSecuencial = mostrarNombreSecuencial;
text.mostrarNombreSecuencialImvertido = mostrarNombreSecuencialImvertido
module.exports = text;



