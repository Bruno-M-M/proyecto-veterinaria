// Función para renderizar filas en la tabla
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color: #6b7280;">No se encontraron usuarios.</td></tr>';
    return;
  }

  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 500;">${user.nombre}</td>
      <td>${user.run}</td>
      <td style="color: #2563eb;">${user.correo}</td>
      <td>${user.region}</td>
      <td>${user.comuna}</td>
      <td>${user.tipoUsuario}</td>
    `;
    tbody.appendChild(row);
  });
}

// Búsqueda en tiempo real
const searchInput = document.getElementById('searchInput');
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

// Cargar datos al iniciar
renderTable(usuariosData);