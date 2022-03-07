function convertir() {
    let valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML = `<b>${valor}</b>`;

    let de = document.getElementById("de").value;
    let a = document.getElementById("a").value;

    var dolar = 200.00;
    var euro = 236.00;
    resultado = 0;


    /* Peso a Dolar */
    if (de == 1 && a == 2) {
        resultado = valor / dolar;
    }
    /* Peso a Euro */
    else if (de == 1 && a == 3) {
        resultado = valor / euro;
    }

    /* Dolar a Peso*/
    else if (de == 2 && a == 1) {
        resultado = valor * dolar;
    }
    /* Dolar a Euro */
    else if (de == 2 && a == 3) {
        resultado = valor * (dolar / euro);
    }
    /* Euro a Peso */
    else if (de == 3 && a == 1) {
        resultado = valor * euro;
    }
    /* Euro a Dolar */
    else if (de == 3 && a == 2) {
        resultado = valor * (euro / dolar);
    }
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML =`Resultado: $ ${resultado}`
}