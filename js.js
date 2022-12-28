let ingresarCantidad = Number(prompt("Bienvenido al convertor de monedas \n \n Ingrese una cantidad en pesos (sin puntos o coma):"));
let ingresados = '';

while (isNaN(ingresarCantidad) === true) {
    ingresados += ingresarCantidad +"\n";
    ingresarCantidad = prompt("Bienvenido al convertor de monedas \n \n Ingrese una cantidad en pesos (sin puntos o coma) :");
}
let elegirMoneda = prompt("¿Deseas convertir a dolar o euro?")

function conversor(ingresarCantidad, elegirMoneda) {
    let dolar = 240;
    let euro = 260;

    if (elegirMoneda === "dolar") {
        return ingresarCantidad / dolar;

    } else if (elegirMoneda === "euro"){
        return ingresarCantidad / euro;
    }else{
        return "No existe esa moneda"
    }
}

alert(conversor(ingresarCantidad, elegirMoneda));




