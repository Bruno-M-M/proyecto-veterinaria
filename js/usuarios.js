// Referencias a elementos del DOM
const tbody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');

const modalEditar = document.getElementById('modalEditar');
const formEditar = document.getElementById('formEditarUsuario');
const btnCerrarModal = document.getElementById('btnCerrarModal');
const btnCancelarEditar = document.getElementById('btnCancelarEditar');

const editIndexInput = document.getElementById('editUserIndex');
const editNombreInput = document.getElementById('editNombre');
const editRunInput = document.getElementById('editRun');
const editCorreoInput = document.getElementById('editCorreo');
const editRegionSelect = document.getElementById('editRegion');
const editComunaSelect = document.getElementById('editComuna');
const editTipoSelect = document.getElementById('editTipo');

// Función para renderizar filas en la tabla
function renderTable(data) {
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 20px; color: #6b7280;">No se encontraron usuarios.</td></tr>';
    return;
  }

  data.forEach((user) => {
    // Buscar el índice real dentro del arreglo global usuariosData
    const realIndex = usuariosData.indexOf(user);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 500;">${user.nombre}</td>
      <td>${user.run}</td>
      <td style="color: #2563eb;">${user.correo}</td>
      <td>${user.region}</td>
      <td>${user.comuna}</td>
      <td>${user.tipoUsuario}</td>
      <td>
        <button class="btn-action-edit" onclick="abrirModalEditar(${realIndex})">Editar</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Cargar Regiones y Comunas en el select del Modal
function cargarRegionesEdit() {
  editRegionSelect.innerHTML = '';
  regionesYComunas.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.region;
    opt.textContent = item.region;
    editRegionSelect.appendChild(opt);
  });
}

function cargarComunasEdit(regionNombre, comunaSeleccionada = '') {
  editComunaSelect.innerHTML = '';
  const regionObj = regionesYComunas.find(r => r.region === regionNombre);
  if (regionObj) {
    regionObj.comunas.forEach(comuna => {
      const opt = document.createElement('option');
      opt.value = comuna;
      opt.textContent = comuna;
      if (comuna === comunaSeleccionada) opt.selected = true;
      editComunaSelect.appendChild(opt);
    });
  }
}

// Evento al cambiar la región en el modal
editRegionSelect.addEventListener('change', (e) => {
  cargarComunasEdit(e.target.value);
});

// Función para abrir el modal y precargar los datos
window.abrirModalEditar = function(index) {
  const user = usuariosData[index];
  if (!user) return;

  editIndexInput.value = index;
  editNombreInput.value = user.nombre;
  editRunInput.value = user.run;
  editCorreoInput.value = user.correo;
  editTipoSelect.value = user.tipoUsuario;

  cargarRegionesEdit();
  editRegionSelect.value = user.region;
  cargarComunasEdit(user.region, user.comuna);

  modalEditar.classList.add('active');
};

// Cerrar Modal
function cerrarModal() {
  modalEditar.classList.remove('active');
}

btnCerrarModal.addEventListener('click', cerrarModal);
btnCancelarEditar.addEventListener('click', cerrarModal);

// Guardar Cambios del Formulario de Edición
formEditar.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = parseInt(editIndexInput.value, 10);

  if (!isNaN(index) && usuariosData[index]) {
    usuariosData[index] = {
      nombre: editNombreInput.value.trim(),
      run: editRunInput.value.trim(),
      correo: editCorreoInput.value.trim(),
      region: editRegionSelect.value,
      comuna: editComunaSelect.value,
      tipoUsuario: editTipoSelect.value
    };

    renderTable(usuariosData);
    cerrarModal();
  }
});

// Búsqueda en tiempo real
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = usuariosData.filter(u => 
      u.nombre.toLowerCase().includes(query) || 
      u.run.toLowerCase().includes(query) ||
      u.correo.toLowerCase().includes(query) ||
      u.region.toLowerCase().includes(query) ||
      u.comuna.toLowerCase().includes(query) ||
      u.tipoUsuario.toLowerCase().includes(query)
    );
    renderTable(filtered);
  });
}

// Paginación interacción
const pageButtons = document.querySelectorAll('.page-num');
pageButtons.forEach(button => {
  button.addEventListener('click', function() {
    document.querySelector('.page-num.active')?.classList.remove('active');
    this.classList.add('active');
  });
});

// Botón Nuevo Usuario
document.getElementById('btnNuevoUsuario')?.addEventListener('click', () => {
  alert('Abrir formulario para registrar un nuevo usuario');
});

// Inicialización
renderTable(usuariosData);