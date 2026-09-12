
const productos = [
  { codigo: "ME001", categoria: "antibioticos", nombre: "Amoxibay 250mg", descripcion: "Amoxicilina — Blíster de 10 comprimidos. Para perro y gato. Stock disponible: 45 unidades.", precio: 4200 },
  { codigo: "ME002", categoria: "antibioticos", nombre: "Enrox 50mg", descripcion: "Enrofloxacino — Blíster de 10 comprimidos. Para perro y gato. Stock disponible: 30 unidades.", precio: 6800 },
  { codigo: "ME003", categoria: "antibioticos", nombre: "Metrobay 250mg", descripcion: "Metronidazol — Blíster de 10 comprimidos. Para perro y gato. Stock disponible: 28 unidades.", precio: 3900 },

  { codigo: "ME004", categoria: "antiparasitarios", nombre: "Nexgard", descripcion: "Afoxolaner — Masticable, 1 unidad. Para perro. Stock disponible: 60 unidades.", precio: 9500 },
  { codigo: "ME005", categoria: "antiparasitarios", nombre: "Bravecto", descripcion: "Fluralaner — Masticable, 1 unidad. Para perro. Stock disponible: 40 unidades.", precio: 18900 },
  { codigo: "ME006", categoria: "antiparasitarios", nombre: "Revolution Plus", descripcion: "Selamectina + Sarolaner — Pipeta, 1 unidad. Para gato. Stock disponible: 35 unidades.", precio: 14500 },
  { codigo: "ME007", categoria: "antiparasitarios", nombre: "Drontal Plus", descripcion: "Praziquantel + Pamoato — Comprimido, 1 unidad. Para perro. Stock disponible: 80 unidades.", precio: 3200 },
  { codigo: "ME008", categoria: "antiparasitarios", nombre: "Milbemax Gato", descripcion: "Milbemicina + Praziquantel — Comprimido, 2 unidades. Para gato. Stock disponible: 50 unidades.", precio: 6800 },

  { codigo: "ME009", categoria: "antiinflamatorios", nombre: "Meloxicam 1mg", descripcion: "Meloxicam — Blíster de 10 comprimidos. Para perro y gato. Stock disponible: 55 unidades.", precio: 4500 },
  { codigo: "ME010", categoria: "antiinflamatorios", nombre: "Carprofen 50mg", descripcion: "Carprofeno — Blíster de 10 comprimidos. Para perro. Stock disponible: 30 unidades.", precio: 9800 },

  { codigo: "ME011", categoria: "dermatologia", nombre: "Clorhexidina shampoo", descripcion: "Clorhexidina 2% — Frasco de 250ml. Para perro y gato. Stock disponible: 25 unidades.", precio: 8900 },
  { codigo: "ME012", categoria: "dermatologia", nombre: "Malaseb shampoo", descripcion: "Miconazol + Clorhexidina — Frasco de 250ml. Para perro y gato. Stock disponible: 20 unidades.", precio: 12500 },
  { codigo: "ME013", categoria: "dermatologia", nombre: "Apoquel 16mg", descripcion: "Oclacitinib — Blíster de 10 comprimidos. Para perro. Stock disponible: 18 unidades.", precio: 22000 },

  { codigo: "ME014", categoria: "digestivo", nombre: "Probifor", descripcion: "Bacillus clausii — Sobres de 5ml, caja de 10. Para perro y gato. Stock disponible: 40 unidades.", precio: 5600 },
  { codigo: "ME015", categoria: "digestivo", nombre: "Omeprazol 10mg vet", descripcion: "Omeprazol — Blíster de 10 comprimidos. Para perro y gato. Stock disponible: 35 unidades.", precio: 3800 },

  { codigo: "ME016", categoria: "cardiaco", nombre: "Vetmedin 2.5mg", descripcion: "Pimobendan — Blíster de 10 comprimidos. Para perro. Stock disponible: 15 unidades.", precio: 28000 },

  { codigo: "ME017", categoria: "analgesicos", nombre: "Tramadol 50mg vet", descripcion: "Tramadol — Blíster de 10 comprimidos. Para perro. Stock disponible: 22 unidades.", precio: 5200 },

  { codigo: "ME018", categoria: "vacunas", nombre: "Nobivac DHPPi", descripcion: "Vacuna polivalente — Vial, 1 dosis. Para perro. Stock disponible: 48 unidades.", precio: 8500 },
  { codigo: "ME019", categoria: "vacunas", nombre: "Nobivac Rabies", descripcion: "Vacuna antirrábica — Vial, 1 dosis. Para perro y gato. Stock disponible: 60 unidades.", precio: 5800 },
  { codigo: "ME020", categoria: "vacunas", nombre: "Felocell CVR", descripcion: "Vacuna triple felina — Vial, 1 dosis. Para gato. Stock disponible: 36 unidades.", precio: 7200 },

  { codigo: "ME021", categoria: "suplementos", nombre: "Omega vet 3-6-9", descripcion: "Ácidos grasos omega — Frasco de 100ml. Para perro y gato. Stock disponible: 30 unidades.", precio: 9900 },
  { codigo: "ME022", categoria: "suplementos", nombre: "Condrovet forte", descripcion: "Condroitina + Glucosamina — Blíster de 30 comprimidos. Para perro. Stock disponible: 25 unidades.", precio: 14500 },
];

function crearTarjetaProducto(producto) {
  const article = document.createElement("article");
  article.className = producto.categoria;

  const h3 = document.createElement("h3");
  h3.textContent = producto.nombre;

  const p = document.createElement("p");
  p.textContent = producto.descripcion;

  const precio = document.createElement("p");
  precio.className = "precio";
  precio.textContent = `$${producto.precio}`;

  const boton = document.createElement("button");
  boton.className = "btn btn-outline-success boton-agregar";
  boton.dataset.producto = producto.codigo;
  boton.dataset.precio = producto.precio;
  boton.textContent = "Agregar";

  article.append(h3, p, precio, boton);
  return article;
}

function renderizarProductos() {
  const contenedor = document.querySelector(".servicios");
  if (!contenedor) return;
  productos.forEach((producto) => {
    contenedor.appendChild(crearTarjetaProducto(producto));
  });
}

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

renderizarProductos();

document.addEventListener("click", (evento) => {
  const boton = evento.target.closest(".boton-agregar");
  if (boton) {
    agregarAlCarrito(boton);
  }
});
