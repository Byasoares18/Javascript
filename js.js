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
    
    
    let monedas = {
        usd: criarMoneda('Dolar','USD', 182.47),
        eur: criarMoneda('Euro','EUR', 197.08),
        gbp: criarMoneda('Libra','GBP', 224.24),
        uyu: criarMoneda('Peso uruguayo', 'UYU', 4.59),
        brl: criarMoneda('Real', 'BRL', 35.778)
    };
    
    let casa = {
        taxa: 0.10
    }
    
    casa.proporCompra = function (moneda, cantidad) {
        let valorAjustado = moneda.valor * (1 + this.taxa);
        return valorAjustado * cantidad;
    }
    

    casa.proporVenda = function (moneda, cantidad) {
        let valorAjustado = moneda.valor * (1 - this.taxa);
        return valorAjustado * cantidad;
    }
    
    casa.proporCambio = function (moneda1, ctd1, moneda2, ctd2) {
        let valorCompra = this.proporCompra (moneda1 , ctd1);
        let valorVenda = this.proporvenda (moneda2, ctd2);
    
        return valorVenda - valorCompra;
    }
    
    console.log (valorAjustado * cantidad)
    console.log (valorVenda - valorCompra)

    




    /* casa.criarTabla = function(monedas) { 
        tabela = []

        for (let moneda in monedas) {
        tabla.push({
        "Moeda": monedas[moneda].nombre + ' (' + monedas[moneda]. sigla + ')',
        "Valor de venda": this.proporVenda (monedas[moneda], 1),
        "Valor de compra": this.proporCompra (monedas[moneda], 1)
        });       
        }
        return tabla;
    }
    
    let tabla = casa.criarTabela(monedas); */


    let fecha_hoy = new Date();
    console.log(fecha_hoy)

    console.log ( 'Gracias por elegirnos') 