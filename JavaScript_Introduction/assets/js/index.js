precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = 0;

function add() {
    cantidad++;
    document.querySelector(".cantidad").innerText = cantidad;
    updateTotal();
}

function subtract() {
    if (cantidad > 0) {
        cantidad--;
        document.querySelector(".cantidad").innerText = cantidad;
    }
    updateTotal();
}

function updateTotal() {
    const valorTotal = cantidad * precio;
    document.querySelector(".valor-total").innerText = valorTotal;
}