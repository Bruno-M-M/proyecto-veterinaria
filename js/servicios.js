
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(boton) {
  const producto = boton.dataset.producto;
  const precio = Number(boton.dataset.precio);
  const nombre = boton.closest("article").querySelector("h3").textContent;

  const item = carrito.find((p) => p.producto === producto);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ producto, nombre, precio, cantidad: 1 });
  }

  guardarCarrito();
  mostrarConfirmacion(boton);
}

function mostrarConfirmacion(boton) {
  const textoOriginal = boton.textContent;
  boton.textContent = "Agregado";
  boton.disabled = true;

  setTimeout(() => {
    boton.textContent = textoOriginal;
    boton.disabled = false;
  }, 1200);
}

document.querySelectorAll(".boton-agregar").forEach((boton) => {
  boton.addEventListener("click", () => agregarAlCarrito(boton));
});
