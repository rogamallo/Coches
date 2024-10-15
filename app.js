//Ejercicio 1
//1. Crea una función que imprima en la consola todos los coches que están en venta, mostrando su marca y modelo.
function cochesEnVenta() {
    for (let i in coches) {
        if (coches[i].enVenta) {
            console.log(`${coches[i].marca} ${coches[i].modelo}`);
        }
    }
}
console.log ('Ejercicio 1');
cochesEnVenta();

//Ejercicio 2
//2. Define una función que reciba un nombre de propietario y devuelva el modelo del coche que le pertenece.
function obtenerModeloPorPropietario(nombrePropietario) {
    for (let i in coches) {
        if (coches[i].propietario.nombre === nombrePropietario) {
            return coches[i].modelo;
        }
    }
    return null;
}
console.log ('Ejercicio 2');
console.log(obtenerModeloPorPropietario('John'));
console.log(obtenerModeloPorPropietario('Samantha'));

//Ejercicio 3
//3. Escribe una función que reciba un color y un año, y devuelva un array con todos los coches que coinciden con esos criterios.
function cochesPorColorYAnio(color, anio) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].color === color && coches[i].anio === anio) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log ('Ejercicio 3');
console.log(cochesPorColorYAnio('rojo', 2020));
console.log(cochesPorColorYAnio('negro', 2019));

//Ejercicio 4
//4. Crea una función que devuelva la cantidad total de coches que están en venta.
function contarCochesEnVenta() {
    let contador = 0;
    for (let i in coches) {
        if (coches[i].enVenta) {
            contador++;
        }
    }
    return contador;
}
console.log ('Ejercicio 4');
console.log(contarCochesEnVenta());

//Ejercicio 5
//5. Define una función que reciba un precio y determine si hay coches en venta que sean más baratos que ese precio.
function hayCochesMasBaratos(precio) {
    for (let i in coches) {
        if (coches[i].enVenta && coches[i].precio < precio) {
            return true;
        }
    }
    return false;
}
console.log ('Ejercicio 5');
console.log(hayCochesMasBaratos(25000));
console.log(hayCochesMasBaratos(15000));

//Ejercicio 6
// 6. Escribe una función que reciba un modelo de coche y devuelva sus características.
function obtenerCaracteristicasPorModelo(modelo) {
    for (let i in coches) {
        if (coches[i].modelo === modelo) {
            return coches[i].carateristicas;
        }
    }
    return null;
}
console.log ('Ejercicio 6');
console.log(obtenerCaracteristicasPorModelo('Civic'));
console.log(obtenerCaracteristicasPorModelo('Camaro'));

//Ejercicio 7
//7. Crea una función que reciba un año y devuelva un array con todos los coches que son más nuevos que ese año.
function cochesMasNuevosQue(anio) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].anio > anio) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log ('Ejercicio 7');
console.log(cochesMasNuevosQue(2019));

//Ejercicio 8
//8. Define una función que calcule y devuelva el precio promedio de todos los coches en venta.
function precioPromedioEnVenta() {
    let sumaPrecios = 0;
    let contador = 0;
    for (let i in coches) {
        if (coches[i].enVenta) {
            sumaPrecios += coches[i].precio;
            contador++;
        }
    }
    return contador === 0 ? 0 : sumaPrecios / contador;
}
console.log('Ejercicio 8');
console.log(precioPromedioEnVenta());

//Ejercicio 9
//9. Escribe una función que devuelva un objeto agrupando los coches por su marca.
function agruparPorMarca() {
    let agrupados = {};
    for (let i in coches) {
        let marca = coches[i].marca;
        if (!agrupados[marca]) {
            agrupados[marca] = [];
        }
        agrupados[marca].push(coches[i]);
    }
    return agrupados;
}
console.log('Ejercicio 9');
console.log(agruparPorMarca());

//Ejercicio 10
//10. Crea una función que imprima en la consola el nombre y la localización de cada propietario de coche que está en venta.
function propietariosDeCochesEnVenta() {
    for (let i in coches) {
        if (coches[i].enVenta) {
            console.log(`${coches[i].propietario.nombre}, ${coches[i].propietario.localizacion}`);
        }
    }
}
console.log('Ejercicio 10');
propietariosDeCochesEnVenta();

//Ejercicio 11
//11. Define una función que reciba una característica y devuelva un array de coches que la tengan.
function cochesPorCaracteristica(caracteristica) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].carateristicas.includes(caracteristica)) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log('Ejercicio 11');
console.log(cochesPorCaracteristica('pantalla tactil'));
console.log(cochesPorCaracteristica('conduccion autonoma'));

//Ejercicio 12
// 12. Escribe una función que calcule la suma total de los precios de todos los coches que están en venta.
function sumaTotalPrecios() {
    let suma = 0;
    for (let i in coches) {
        if (coches[i].enVenta) {
            suma += coches[i].precio;
        }
    }
    return suma;
}
console.log('Ejercicio 12');
console.log(sumaTotalPrecios());

//Ejercicio 13
//13. Crea una función que reciba un color y devuelva cuántos coches de ese color hay en el objeto.
function contarCochesPorColor(color) {
    let contador = 0;
    for (let i in coches) {
        if (coches[i].color === color) {
            contador++;
        }
    }
    return contador;
}
console.log('Ejercicio 13');
console.log(contarCochesPorColor('rojo'));
console.log(contarCochesPorColor('negro'));

//Ejercicio 14
//14. Define una función que devuelva el coche con el precio más alto que esté en venta.
function cocheMasCaroEnVenta() {
    let masCaro = null;
    for (let i in coches) {
        if (coches[i].enVenta) {
            if (masCaro === null || coches[i].precio > masCaro.precio) {
                masCaro = coches[i];
            }
        }
    }
    return masCaro;
}
console.log ('Ejercicio 14');
console.log(cocheMasCaroEnVenta());

//Ejercicio 15
//15. Escribe una función que reciba un modelo y devuelva true si ese coche está en venta, o false en caso contrario.
function estaEnVenta(modelo) {
    for (let i in coches) {
        if (coches[i].modelo === modelo) {
            return coches[i].enVenta;
        }
    }
    return false;
}
console.log('Ejercicio 15');
console.log(estaEnVenta('Civic'));
console.log(estaEnVenta('Camaro'));

//Ejercicio 16
//16. Crea una función que devuelva un array con todos los coches del objeto coches.
function obtenerTodosLosCoches() {
    let todosLosCoches = [];
    for (let i in coches) {
        todosLosCoches.push(coches[i]);
    }
    return todosLosCoches;
}
console.log('Ejercicio 16');
console.log(obtenerTodosLosCoches());

//Ejercicio 17
//17. Define una función que reciba un modelo de coche y devuelva la información completa del coche que corresponde a ese modelo.
function obtenerInfoPorModelo(modelo) {
    for (let i in coches) {
        if (coches[i].modelo === modelo) {
            return coches[i];
        }
    }
    return null;
}
console.log('Ejercicio 17');
console.log(obtenerInfoPorModelo('Civic'));
console.log(obtenerInfoPorModelo('Camaro'));

//Ejercicio 18
//18. Escribe una función que reciba un año y imprima todos los coches que son de ese año.
function cochesPorAnio(anio) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].anio === anio) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log('Ejercicio 18');
console.log(cochesPorAnio(2020));
console.log(cochesPorAnio(2021));

//Ejercicio 19
//19. Crea una función que reciba una marca y devuelva true si hay al menos un coche de esa marca, o false si no.
function existeCochePorMarca(marca) {
    for (let i in coches) {
        if (coches[i].marca === marca) {
            return true;
        }
    }
    return false;
}
console.log('Ejercicio 19');
console.log(existeCochePorMarca('Honda'));
console.log(existeCochePorMarca('Ferrari'));

//Ejercicio 20
//20. Define una función que devuelva el coche más antiguo que está en venta.
function cocheMasAntiguoEnVenta() {
    let masAntiguo = null;
    for (let i in coches) {
        if (coches[i].enVenta) {
            if (masAntiguo === null || coches[i].anio < masAntiguo.anio) {
                masAntiguo = coches[i];
            }
        }
    }
    return masAntiguo;
}
console.log('Ejercicio 20');
console.log(cocheMasAntiguoEnVenta());

//Ejercicio 21
//21. Escribe una función que reciba un precio máximo y devuelva un array con todos los coches que son más baratos que ese precio.
function cochesMasBaratosQue(precio) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].enVenta && coches[i].precio < precio) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log('Ejercicio 21');
console.log(cochesMasBaratosQue(30000));

//Ejercicio 22
//22. Crea una función que imprima las características de todos los coches que están en venta.
function imprimirCaracteristicasCochesEnVenta() {
    for (let i in coches) {
        if (coches[i].enVenta) {
            console.log(`${coches[i].marca} ${coches[i].modelo}: ${coches[i].carateristicas.join(', ')}`);
        }
    }
}
console.log('Ejercicio 22');
imprimirCaracteristicasCochesEnVenta();

//Ejercicio 23
//23. Define una función que cuente cuántos propietarios diferentes hay entre los coches en venta.
function contarPropietariosEnVenta() {
    let propietarios = new Set();
    for (let i in coches) {
        if (coches[i].enVenta) {
            propietarios.add(coches[i].propietario.nombre);
        }
    }
    return propietarios.size;
}
console.log('Ejercicio 23');
console.log(contarPropietariosEnVenta());

//Ejercicio 24
//24. Escribe una función que reciba un color y devuelva un array con todos los coches que son de ese color.
function cochesPorColor(color) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].color === color) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log('Ejercicio 24');
console.log(cochesPorColor('rojo'));

//Ejercicio 25
//25. Crea una función que sume y devuelva la edad total de todos los propietarios de coches que están en venta.
function edadTotalPropietariosEnVenta() {
    let sumaEdades = 0;
    for (let i in coches) {
        if (coches[i].enVenta) {
            sumaEdades += coches[i].propietario.edad;
        }
    }
    return sumaEdades;
}
console.log('Ejercicio 25');
console.log(edadTotalPropietariosEnVenta());

//Ejercicio 26
//26. Define una función que reciba un modelo de coche y una característica, y devuelva true si el coche tiene esa característica, o false en caso contrario.
function tieneCaracteristica(modelo, caracteristica) {
    for (let i in coches) {
        if (coches[i].modelo === modelo) {
            return coches[i].carateristicas.includes(caracteristica);
        }
    }
    return false;
}
console.log('Ejercicio 26');
console.log(tieneCaracteristica('Civic', 'transmision automatica'));
console.log(tieneCaracteristica('Camaro', 'techo corredizo'));

//Ejercicio 27
//27. Escribe una función que devuelva un objeto agrupando los coches por su año.
function agruparPorAnio() {
    let agrupados = {};
    for (let i in coches) {
        let anio = coches[i].anio;
        if (!agrupados[anio]) {
            agrupados[anio] = [];
        }
        agrupados[anio].push(coches[i]);
    }
    return agrupados;
}
console.log('Ejercicio 27');
console.log(agruparPorAnio());

//Ejercicio 28
//28. Crea una función que reciba el nombre de un coche y imprima en la consola toda su información.
function imprimirInfoPorNombre(nombreCoche) {
    for (let i in coches) {
        if (i === nombreCoche) {
            console.log(coches[i]);
        }
    }
}
console.log('Ejercicio 28');
imprimirInfoPorNombre('coche 1');

//Ejercicio 29
//29. Define una función que devuelva la cantidad de coches que tienen transmisión automática.
function contarTransmisionAutomatica() {
    let contador = 0;
    for (let i in coches) {
        if (coches[i].carateristicas.includes('transmision automatica')) {
            contador++;
        }
    }
    return contador;
}
console.log('Ejercicio 29');
console.log(contarTransmisionAutomatica());

//Ejercicio 30
//30. Escribe una función que reciba una edad y devuelva un array con los coches cuyos propietarios son de esa edad o más jóvenes.
function cochesPorEdadPropietario(edadMax) {
    let resultado = [];
    for (let i in coches) {
        if (coches[i].propietario.edad <= edadMax) {
            resultado.push(coches[i]);
        }
    }
    return resultado;
}
console.log('Ejercicio 30');
console.log(cochesPorEdadPropietario(30));
