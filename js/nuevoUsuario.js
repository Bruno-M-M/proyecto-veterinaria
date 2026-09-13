console.log("JavaScript esta funcionando desde app.js");

/*Formulario de registro*/
const formulario = document.getElementById("formulario-registro");
const nombreRegistro = document.getElementById("nombreRegistro");
const runRegistro = document.getElementById("runRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const correoConfirmar = document.getElementById("correoConfirmar");
const tipoUsuarioRegistro = document.getElementById("tipoUsuario");
const passwordRegistro = document.getElementById("password");
const passwordConfirmar = document.getElementById("passwordConfirmar");
const mensajeResultado = document.getElementById("mensaje-resultado");

/**
 * Función para validar un RUN chileno ingresado sin puntos ni guión
 * Ejemplo: "12345678K" o "190532299"
 */
function validarRUN(run) {
    // Debe tener entre 8 y 9 caracteres: 7 u 8 dígitos + 1 dígito verificador (número o 'k')
    const regExp = /^[0-9]{7,8}[0-9kK]$/;
    if (!regExp.test(run)) return false;

    const cuerpo = run.slice(0, -1);
    let dv = run.slice(-1).toUpperCase();

    // Algoritmo de verificación Módulo 11
    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i), 10) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    let dvEsperado = 11 - resto;

    if (dvEsperado === 11) {
        dvEsperado = "0";
    } else if (dvEsperado === 10) {
        dvEsperado = "K";
    } else {
        dvEsperado = dvEsperado.toString();
    }

    return dv === dvEsperado;
}

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    
    const nombre = nombreRegistro.value.trim();
    const run = runRegistro.value.trim();
    const correoReg = correoRegistro.value.trim();
    const correoConf = correoConfirmar.value.trim();
    const tipoUsuario = tipoUsuarioRegistro.value;
    const pwdReg = passwordRegistro.value.trim();
    const pwdConf = passwordConfirmar.value.trim();

    // Validación de campos vacíos
    if (
        nombre === "" || run === "" || correoReg === "" || correoConf === "" || tipoUsuario === "" || pwdReg === "" || pwdConf === ""
    ) {
        mensajeResultado.textContent = "Debe completar todos los campos.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    // Validación de RUN (sin puntos ni guión)
    if (!validarRUN(run)) {
        mensajeResultado.textContent = "El RUN ingresado no es válido. Ingréselo sin puntos ni guión (ej: 12345678K).";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    // Validación de opciones permitidas para Tipo de Usuario
    const tiposValidos = ["Administrador", "Cliente", "Vendedor"];
    if (!tiposValidos.includes(tipoUsuario)) {
        mensajeResultado.textContent = "Debe seleccionar un tipo de usuario válido.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    if (nombre.length > 100){
        mensajeResultado.textContent = "El nombre debe contener menos de 100 caracteres.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    const soloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetrasYEspacios.test(nombre)) {
        mensajeResultado.textContent = "El nombre solo debe contener caracteres alfabéticos y espacios.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    if (correoReg.length > 60){
        mensajeResultado.textContent = "El correo debe contener menos de 60 caracteres.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    if (correoReg !== correoConf) {
        mensajeResultado.textContent = "Los correos electrónicos no coinciden.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    if (pwdReg.length < 10){
        mensajeResultado.textContent = "La contraseña debe contener al menos 10 caracteres.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    if (pwdReg !== pwdConf) {
        mensajeResultado.textContent = "Las contraseñas no coinciden.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    mensajeResultado.textContent = "¡Registro exitoso!";
    mensajeResultado.className = "alert alert-success mt-4";
});