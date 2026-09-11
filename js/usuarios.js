// Datos ficticios de usuarios
const usuariosData = [
  { nombre: "Carlos Mendoza", correo: "carlos.mendoza@email.com", observaciones: "Cuenta de Administrador Principal. Requiere verificación de dos factores." },
  { nombre: "Ana María Gómez", correo: "ana.gomez@empresa.org", observaciones: "Usuario activo. Rol de edición de contenidos." },
  { nombre: "Sofía Rossi", correo: "s.rossi@techmail.net", observaciones: "Suscripción Premium anual pagada el 15/01." },
  { nombre: "Diego Fernández", correo: "diego.f@diseno.com", observaciones: "Pendiente de completar datos de perfil." },
  { nombre: "Lucía Morales", correo: "lucia.m@consultora.io", observaciones: "Acceso temporal finaliza a fin de mes." },
  { nombre: "Javier Ríos", correo: "j.rios@desarrollo.dev", observaciones: "Inactividad detectada durante los últimos 30 días." },
  { nombre: "Elena Torres", correo: "elena.torres@ventas.cl", observaciones: "Cliente VIP. Prioridad en soporte técnico." },
  { nombre: "Gabriel Silva", correo: "gabriel.silva@innovacion.es", observaciones: "Solicitó cambio de dirección de correo electrónico." }
];

// Función para renderizar filas en la tabla
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 20px; color: #6b7280;">No se encontraron usuarios.</td></tr>';
    return;
  }

  data.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 500;">${user.nombre}</td>
      <td style="color: #2563eb;">${user.correo}</td>
      <td>${user.observaciones}</td>
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
      u.correo.toLowerCase().includes(query) ||
      u.observaciones.toLowerCase().includes(query)
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
document.addEventListener('DOMContentLoaded', () => {
  renderTable(usuariosData);
});