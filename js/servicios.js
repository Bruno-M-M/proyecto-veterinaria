
const productos = [
  { codigo: "SV001", categoria: "consulta", nombre: "Consulta General", descripcion: "Consulta de salud por enfermedad, decaimiento o control general.", precio: 15000 },
  { codigo: "SV002", categoria: "consulta", nombre: "Consulta Urgencia", descripcion: "Atención médica inmediata para mascotas con problemas graves o repentinos que ponen en riesgo su vida.", precio: 25000 },
  { codigo: "SV003", categoria: "consulta", nombre: "Control Postoperatorio", descripcion: "Cuidados a un paciente después de una cirugía para supervisar su recuperación.", precio: 10000 },
  { codigo: "SV004", categoria: "consulta", nombre: "Consulta ave / conejo", descripcion: "Consulta de salud especializada en aves y conejos.", precio: 18000 },
  { codigo: "SV005", categoria: "consulta", nombre: "Segunda opinión médica", descripcion: "Reevaluamos tu caso para darte otra opinión médica. Requiere ficha previa.", precio: 20000 },

  { codigo: "VA001", categoria: "vacunacion", nombre: "Vacuna antirrábica canina", descripcion: "Protege a tu perro contra el virus de la rabia. Obligatoria por ley.", precio: 12000 },
  { codigo: "VA002", categoria: "vacunacion", nombre: "Vacuna séxtuple canina", descripcion: "Protege contra las principales enfermedades virales caninas. Refuerzo anual.", precio: 18000 },
  { codigo: "VA003", categoria: "vacunacion", nombre: "Vacuna bivalente felina", descripcion: "Protege al gato contra dos de las enfermedades virales felinas más comunes. Refuerzo anual.", precio: 15000 },
  { codigo: "VA004", categoria: "vacunacion", nombre: "Vacuna triple felina", descripcion: "Protege al gato contra tres enfermedades virales frecuentes. Refuerzo anual.", precio: 17000 },
  { codigo: "VA005", categoria: "vacunacion", nombre: "Vacuna Bordetella canina", descripcion: "Previene la tos de las perreras (traqueobronquitis infecciosa canina).", precio: 14000 },
  { codigo: "VA006", categoria: "vacunacion", nombre: "Vacuna antirrábica felina", descripcion: "Protege a tu gato contra el virus de la rabia.", precio: 12000 },

  { codigo: "CI001", categoria: "cirugia", nombre: "Esterilización hembra canina", descripcion: "Incluye anestesia y hospitalización de 24 horas.", precio: 80000 },
  { codigo: "CI002", categoria: "cirugia", nombre: "Esterilización macho canino", descripcion: "Incluye anestesia.", precio: 60000 },
  { codigo: "CI003", categoria: "cirugia", nombre: "Esterilización hembra felina", descripcion: "Incluye anestesia y hospitalización de 12 horas.", precio: 65000 },
  { codigo: "CI004", categoria: "cirugia", nombre: "Esterilización macho felino", descripcion: "Incluye anestesia.", precio: 50000 },
  { codigo: "CI005", categoria: "cirugia", nombre: "Extirpación de tumor cutáneo", descripcion: "Precio referencial; varía según el tamaño del tumor.", precio: 120000 },
  { codigo: "CI006", categoria: "cirugia", nombre: "Cesárea de urgencia", descripcion: "Atención de urgencia para partos complicados.", precio: 180000 },

  { codigo: "DE001", categoria: "desparasitacion", nombre: "Desparasitación interna pequeños (<10 kg)", descripcion: "Desparasitación interna para perros de menos de 10 kg.", precio: 8000 },
  { codigo: "DE002", categoria: "desparasitacion", nombre: "Desparasitación interna medianos (10-25 kg)", descripcion: "Desparasitación interna para perros entre 10 y 25 kg.", precio: 9500 },
  { codigo: "DE003", categoria: "desparasitacion", nombre: "Desparasitación interna grandes (>25 kg)", descripcion: "Desparasitación interna para perros de más de 25 kg.", precio: 11000 },
  { codigo: "DE004", categoria: "desparasitacion", nombre: "Desparasitación interna felina", descripcion: "Desparasitación interna para gatos.", precio: 8000 },
  { codigo: "DE005", categoria: "desparasitacion", nombre: "Antiparasitario externo (pipeta)", descripcion: "Incluye aplicación en el momento de la consulta.", precio: 7500 },

  { codigo: "EX001", categoria: "examenes", nombre: "Hemograma completo", descripcion: "Resultado disponible en 24-48 horas.", precio: 22000 },
  { codigo: "EX002", categoria: "examenes", nombre: "Perfil bioquímico completo", descripcion: "Resultado disponible en 24-48 horas.", precio: 35000 },
  { codigo: "EX003", categoria: "examenes", nombre: "Radiografía (1 proyección)", descripcion: "Evaluación por imagen de una proyección.", precio: 28000 },
  { codigo: "EX004", categoria: "examenes", nombre: "Ecografía abdominal", descripcion: "Evaluación por imagen de los órganos abdominales.", precio: 45000 },
  { codigo: "EX005", categoria: "examenes", nombre: "Test de leishmaniasis", descripcion: "Test rápido para detectar leishmaniasis en perros.", precio: 5000 },

  { codigo: "OT001", categoria: "otro", nombre: "Corte de uñas", descripcion: "Corte de uñas para perros y gatos.", precio: 5000 },
  { codigo: "OT002", categoria: "otro", nombre: "Limpieza dental", descripcion: "Requiere anestesia.", precio: 55000 },
  { codigo: "OT003", categoria: "otro", nombre: "Microchip identificación", descripcion: "Incluye registro del microchip.", precio: 15000 },
  { codigo: "OT004", categoria: "otro", nombre: "Hospitalización (por día)", descripcion: "Incluye monitoreo y alimentación básica.", precio: 30000 },
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
  productos.forEach((producto) => {
    const contenedor = document.querySelector(`.servicios[data-categoria="${producto.categoria}"]`);
    if (contenedor) {
      contenedor.appendChild(crearTarjetaProducto(producto));
    }
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
