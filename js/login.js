document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-login');

  // Selección de inputs
  const correoInput = document.getElementById('correo');
  const passwordInput = document.getElementById('password');

  // Obtener o crear el contenedor para el mensaje final
  let mensajeDiv = document.getElementById('mensaje-resultado');


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpiar errores previos
    limpiarErrores();

    const correo = correoInput ? correoInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    let esValido = true;

    // ==========================================
    // 1. VALIDACIÓN DE CORREO
    // ==========================================
    // Expresión regular para verificar dominios permitidos
    const regexDominio = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    if (correo === '') {
      mostrarError(correoInput, 'El correo electrónico es requerido.');
      esValido = false;
    } else if (correo.length > 100) {
      mostrarError(correoInput, 'El correo no debe superar los 100 caracteres.');
      esValido = false;
    } else if (!regexDominio.test(correo)) {
      mostrarError(correoInput, 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com');
      esValido = false;
    }

    // ==========================================
    // 2. VALIDACIÓN DE CONTRASEÑA
    // ==========================================
    if (password === '') {
      mostrarError(passwordInput, 'La contraseña es requerida.');
      esValido = false;
    } else if (password.length < 4 || password.length > 10) {
      mostrarError(passwordInput, 'La contraseña debe tener entre 4 y 10 caracteres.');
      esValido = false;
    }

    // ==========================================
    // RESULTADO
    // ==========================================
    if (esValido) {
      mensajeDiv.className = 'exito';
      mensajeDiv.style.display = 'block';
      mensajeDiv.textContent = '¡Inicio de sesión exitoso!';
      
      // Aquí podrías redirigir al usuario, por ejemplo:
      // window.location.href = 'index.html';
    } else {
      mensajeDiv.className = 'error';
      mensajeDiv.style.display = 'block';
      mensajeDiv.textContent = 'Por favor, corrige los errores antes de continuar.';
    }
  });

  // Función para inyectar mensajes de error bajo cada campo
  function mostrarError(input, mensaje) {
    if (!input) return;
    input.classList.add('is-invalid');
    
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      feedback.style.color = '#dc2626';
      feedback.style.fontSize = '0.85rem';
      feedback.style.marginTop = '0.25rem';
      input.after(feedback);
    }
    feedback.textContent = mensaje;
  }

  // Función para resetear estados de error
  function limpiarErrores() {
    mensajeDiv.style.display = 'none';
    mensajeDiv.textContent = '';

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.classList.remove('is-invalid');
      const feedback = input.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.remove();
      }
    });
  }
});