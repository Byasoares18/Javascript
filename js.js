let ingresarCantidad = Number(prompt("Bienvenido al convertor de monedas \n \n Ingrese una cantidad en pesos (sin puntos o coma):"));
let ingresados = '';

while (isNaN(ingresarCantidad) === true) {
    ingresados += ingresarCantidad +"\n";
    ingresarCantidad = prompt("Bienvenido al convertor de monedas \n \n Ingrese una cantidad en pesos (sin puntos o coma) :");
}
let elegirMoneda = prompt( 'Esbribe la opción correspondiente de cual deseas convertir : \n \n Dolar, euro, libra, peso uruguayo o real \n')

function conversor(ingresarCantidad, elegirMoneda) {

    
    let dolar = 182.47;
    let euro = 197.08;
    let libra = 224.24;
    let pesoUruguayo = 4.59;
    let real = 35.77;
    
    
    
    if (elegirMoneda === "dolar") {
        return ingresarCantidad / dolar  ;
    }  
    else if (elegirMoneda === "euro"){
        return ingresarCantidad / euro;
    }
    else if (elegirMoneda === "libra"){
        return ingresarCantidad / libra;
    }
    else if (elegirMoneda === "peso uruguayo"){
        return ingresarCantidad / pesoUruguayo;
    }
    else if (elegirMoneda === "real"){
        return ingresarCantidad / real;
    }
    else{
        return "No existe esa moneda"
    }
}

alert ("El cambio es de: " +  conversor(ingresarCantidad, elegirMoneda)); 




function criarMoneda (Nombre, sigla, valor) {
    return {Nombre, sigla, valor};
} 
    const monedas =[
        {Nombre:'Dolar', sigla: 'USD', valor:182.47},
        {Nombre:'Euro', sigla: 'EUR', valor:197.08},
        {Nombre:'Libra', sigla: 'GBP', valor:224.24},
        {Nombre:'Peso uruguayo', sigla: 'UYU', valor:4.59},
        {Nombre:'Real', sigla: 'BRL', valor:35.77}
    ]
    const item = monedas.find (elemento=> elemento.valor > 200)
    console.log(monedas)
    console.log(item)
    console.log( monedas.includes ('Dolar australiano') )

    
    const moneda = new Object()
    moneda.nombre = 'Peso Chileno',
    moneda.sigla = 'CLP'
    moneda.valor = 4.32
    
    console.log(moneda)
    console.log(moneda.nombre)


    let casa = {
        taxa: 0.10
    }
    
    casa.proporCompra = function (moneda, cantidad) {
        let valorAjustado = moneda.valor * (1 + this.taxa);
        return valorAjustado * cantidad
    }
    console.log(casa.proporCompra)

    casa.proporVenda = function (moneda, cantidad) {
        let valorAjustado = moneda.valor * (1 - this.taxa);
        return valorAjustado * cantidad;
    }
    console.log(casa.proporVenda)

    casa.proporCambio = function (moneda1, ctd1, moneda2, ctd2) {
        let valorCompra = this.proporCompra (moneda1 , ctd1);
        let valorVenda = this.proporvenda (moneda2, ctd2);
        return valorVenda - valorCompra;
    } 
    console.log(casa.proporCambio)
     
    function criarTabla (casa) {
    casa.criarTabla = function(monedas) { 
        tabla = []
        for (let moneda in monedas) {
        tabla.push({
        "Moeda": monedas[moneda].nombre + ' (' + monedas[moneda]. sigla + ')',
        "Valor de venda": this.proporVenda (monedas[moneda], 1),
        "Valor de compra": this.proporCompra (monedas[moneda], 1)
        });       
        }
        return tabla;
    }
    
    let tabla = casa.criarTabla(monedas); 
}  
    console.log(criarTabla)

    let fecha_hoy = new Date();
    console.log(fecha_hoy)

    console.log ( 'Gracias por elegirnos') 