console.log("JavaScript esta funcionando desde app.js");

/*Formulario de registro*/
const formulario = document.getElementById("formulario-registro");
const nombreRegistro = document.getElementById("nombreRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const correoConfirmar = document.getElementById("correoConfirmar");
const passwordRegistro = document.getElementById("password");
const passwordConfirmar = document.getElementById("passwordConfirmar");
const mensajeResultado = document.getElementById("mensaje-resultado");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    
    const nombre = nombreRegistro.value.trim();
    const correoReg = correoRegistro.value.trim();
    const correoConf = correoConfirmar.value.trim();
    const pwdReg = passwordRegistro.value.trim();
    const pwdConf = passwordConfirmar.value.trim();

    if (
        nombre === "" || correoReg === "" || correoConf === "" || pwdReg === "" || pwdConf === ""
    ) {
        mensajeResultado.textContent = "Debe completar todos los campos.";
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