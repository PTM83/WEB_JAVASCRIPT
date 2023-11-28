async function obtenerDatosMonedas() {
    try{
        const endpoint = "https://mindicador.cl/api/";
        const response = await fetch(endpoint);
        /*if (!response.ok){
            trow new Error(`HTTP error! Status: ${response.status}`);
        }*/
        return await response.json();
    } catch(error){
        console.log("Error al obtener datos de la API:", error);
    }
}

async function LlenarOpcionesMonedas() {
    const datos = await obtenerDatosMonedas();
    if (datos) {
        const selector = document.getElementById("coinSelector");
        Object.keys(datos).forEach(key => {
            if (datos[key].unidad_medida === 'Pesos') {
                const opcion = document.createElement('option');
                opcion.value = key;
                opcion.textContent = datos[key].nombre;
                selector.appendChild(opcion);
            }

        });
    }
}

/*function LlenarOpcionesMonedas(datos) {
    const selector = document.getElementById('coinSelector');
    for (const key in datos) {
        if (datos[key].unidad_medida === 'Pesos') {
            const opcion = document.createElement('option');
            opcion.value = key;
            opcion.textContent = datos[key].codigo;
            selector.appendChild(opcion);
        }
    }
}*/

/*    const select = document.getElementById("coinSelector");
    Object.keys(datos).forEach(key => {
        if (typeof datos[key] === "object" && datos[key] !== null) {
            const opcion = document.createElement("option");
            opcion.value = key;
            opcion.textContent = key.toUpperCase();
            select.appendChild(opcion);
        }
    });
}*/

function convertirMoneda(montoPesos, tipoCambio) {
    return montoPesos / tipoCambio;
}

function obtenerValorNumerico(inputId) {
    let valor = document.getElementById(inputId).value;

    // Eliminar comas y reemplazar puntos por nada (para el formato 2.000 o 2,000)
    valor = valor.replace(/,/g, '');

    // Convertir a número y verificar si es válido
    const numero = Number(valor);
    if (isNaN(numero)) {
        // No es un número válido
        mostrarError('Por favor, ingresa solo valores numéricos.');
        return null;
    } else {
        // Es un número válido
        ocultarError();
        return numero;
    }
}

function mostrarError(mensaje) {
    const errorDiv = document.getElementById('errorMensaje');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
}

function ocultarError() {
    const errorDiv = document.getElementById('errorMensaje');
    errorDiv.style.display = 'none';
}


/*document.getElementById("transform").addEventListener("click", async () => {
    const montoPesos = document.getElementById("chileanPesos").value;
    const monedaSeleccionada = document.getElementById("coinSelector").value;
    const datosMonedas = await obtenerDatosMonedas();

    if (datosMonedas && datosMonedas[monedaSeleccionada]) {
        const resultado = convertirMoneda(montoPesos,datosMonedas[monedaSeleccionada].valor);
        document.getElementById("resultadoConversion").textContent = resultado.toFixed(2);
    } else {
        console.error("No se encontró información para la moneda seleccionada.");
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const datosMonedas = await obtenerDatosMonedas();
    if (datosMonedas) {
        LlenarOpcionesMonedas(datosMonedas);
    }
});*/


function validarEntrada() {
    const campo = document.getElementById("chileanPesos");
    let valor = campo.value;

    // Limpiar el valor removiendo comas y reemplazando puntos por comas si es necesario
    valor = valor.replace(/,/g, "").replace(/\./g, "");

    // Validar si el valor es numérico
    if (!isNaN(valor) && valor.trim() !== "") {
        campo.value = valor;
        document.getElementById("errorMensaje").textContent = "";
    } else {
        document.getElementById("errorMensaje").textContent = "Por favor, ingresa solo valores numéricos.";
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const datos = await obtenerDatosMonedas();
    LlenarOpcionesMonedas(datos);

    document.getElementById('transform').addEventListener('click', () => {

        const monto = obtenerValorNumerico('chileanPesos');
        if (monto !== null) {
            // Continuar con el código si monto es un número válido
            const monedaSeleccionada = document.getElementById('coinSelector').value;
            const tipoCambio = datos[monedaSeleccionada].valor;
            const resultado = convertirMoneda(monto, tipoCambio);
            document.getElementById('resultadoConversion').textContent = `${resultado.toFixed(2)} ${datos[monedaSeleccionada].nombre}`;
        }
    });
});
    /*document.getElementById('transform').addEventListener('click', () => {
        const monto = document.getElementById('chileanPesos').value;
        console.log(monto);
        const monedaSeleccionada = document.getElementById('coinSelector').value;
        const tipoCambio = datos[monedaSeleccionada].valor;
        const resultado = convertirMoneda(monto, tipoCambio);
        document.getElementById('resultadoConversion').textContent = `${resultado.toFixed(2)} ${datos[monedaSeleccionada].nombre}`;
    });
});*/


