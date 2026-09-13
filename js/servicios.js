
function crearTarjetaServicio(servicio) {
  const article = document.createElement("article");
  article.className = servicio.categoria;

  const h3 = document.createElement("h3");
  h3.textContent = servicio.nombre;

  const info = document.createElement("p");
  info.textContent = `${servicio.especie} — ${servicio.duracion} min`;

  const precio = document.createElement("p");
  precio.className = "precio";
  precio.textContent = `$${servicio.precio}`;

  const boton = document.createElement("button");
  boton.className = "btn btn-outline-success boton-agendar";
  boton.dataset.servicio = servicio.codigo;
  boton.textContent = "Agendar";

  article.append(h3, info);

  if (servicio.observaciones) {
    const observaciones = document.createElement("p");
    observaciones.className = "observaciones";
    observaciones.textContent = servicio.observaciones;
    article.appendChild(observaciones);
  }

  article.append(precio, boton);
  return article;
}

function renderizarServicios(categoria) {
  const contenedor = document.querySelector(".servicios");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const serviciosAMostrar = !categoria
    ? servicios
    : servicios.filter((servicio) => servicio.categoria === categoria);

  serviciosAMostrar.forEach((servicio) => {
    contenedor.appendChild(crearTarjetaServicio(servicio));
  });
}

const citasAgendadas = JSON.parse(localStorage.getItem("citasAgendadas")) || [];

function guardarCitas() {
  localStorage.setItem("citasAgendadas", JSON.stringify(citasAgendadas));
}

function agendarCita(boton) {
  const codigo = boton.dataset.servicio;
  const servicio = servicios.find((s) => s.codigo === codigo);
  if (!servicio) return;

  citasAgendadas.push({ servicio: servicio.codigo, nombre: servicio.nombre, precio: servicio.precio });
  guardarCitas();
  mostrarConfirmacion(boton);
}

function mostrarConfirmacion(boton) {
  const textoOriginal = boton.textContent;
  boton.textContent = "Agendado";
  boton.disabled = true;

  setTimeout(() => {
    boton.textContent = textoOriginal;
    boton.disabled = false;
  }, 1200);
}

renderizarServicios();

document.addEventListener("click", (evento) => {
  const boton = evento.target.closest(".boton-agendar");
  if (boton) {
    agendarCita(boton);
  }
});

const selectCita = document.getElementById("select-cita");
if (selectCita) {
  selectCita.addEventListener("change", () => {
    renderizarServicios(selectCita.value);
  });
}
