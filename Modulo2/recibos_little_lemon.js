function pricecal(impuestos) {
    if (impuestos == true) {
        console.log("Precios con un 20 % de impuestos: ");
        console.log("Plato: Pasta italiana Precio (impuestos incluidos): $11,46 ");
        console.log("Plato: Arroz con verduras Precio (impuestos incluidos): $10,38 ")
    }
    else {
        console.log("Precios sin impuestos: ");
        console.log("Plato: Pasta italiana Precio (impuestos incluidos): $9,55 ");
        console.log("Plato: Arroz con verduras Precio (impuestos incluidos): $8,63 ")
    }
}

pricecal(false);