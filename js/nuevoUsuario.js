console.log("JavaScript esta funcionando desde app.js");

// Arreglo complementario de Regiones y Comunas de Chile
const regionesYComunas = [
    {
        region: "Arica y Parinacota",
        comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
        region: "Tarapacá",
        comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
        region: "Antofagasta",
        comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
        region: "Atacama",
        comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
        region: "Coquimbo",
        comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
        region: "Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Limache", "Olmué", "Quillota", "San Antonio", "Los Andes", "San Felipe"]
    },
    {
        region: "Metropolitana de Santiago",
        comunas: ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "San Bernardo"]
    },
    {
        region: "O'Higgins",
        comunas: ["Rancagua", "Machalí", "Graneros", "San Fernando", "Santa Cruz", "Pichilemu"]
    },
    {
        region: "Maule",
        comunas: ["Talca", "Curicó", "Linares", "Constitución", "Cauquenes"]
    },
    {
        region: "Ñuble",
        comunas: ["Chillán", "Bulnes", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay"]
    },
    {
        region: "Biobío",
        comunas: ["Concepción", "Talcahuano", "San Pedro de la Paz", "Chiguayante", "Coronel", "Lota", "Hualpén", "Los Ángeles"]
    },
    {
        region: "Araucanía",
        comunas: ["Temuco", "Padre Las Casas", "Villarrica", "Pucón", "Angol"]
    },
    {
        region: "Los Ríos",
        comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Río Bueno"]
    },
    {
        region: "Los Lagos",
        comunas: ["Puerto Montt", "Puerto Varas", "Castro", "Ancud", "Osorno"]
    },
    {
        region: "Aysén",
        comunas: ["Coyhaique", "Puerto Aysén", "Chile Chico", "Cochrane"]
    },
    {
        region: "Magallanes y de la Antártica Chilena",
        comunas: ["Punta Arenas", "Puerto Natales", "Porvenir", "Cabo de Hornos"]
    }
];

/* Formulario de registro */
const formulario = document.getElementById("formulario-registro");
const nombreRegistro = document.getElementById("nombreRegistro");
const runRegistro = document.getElementById("runRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const correoConfirmar = document.getElementById("correoConfirmar");
const regionRegistro = document.getElementById("regionRegistro");
const comunaRegistro = document.getElementById("comunaRegistro");
const tipoUsuarioRegistro = document.getElementById("tipoUsuario");
const passwordRegistro = document.getElementById("password");
const passwordConfirmar = document.getElementById("passwordConfirmar");
const mensajeResultado = document.getElementById("mensaje-resultado");

/**
 * Cargar regiones en el select al inicializar el script
 */
function cargarRegiones() {
    regionesYComunas.forEach(item => {
        const option = document.createElement("option");
        option.value = item.region;
        option.textContent = item.region;
        regionRegistro.appendChild(option);
    });
}

cargarRegiones();

/**
 * Evento al cambiar de región para filtrar las comunas
 */
regionRegistro.addEventListener("change", function() {
    const regionSeleccionada = this.value;
    const objetoRegion = regionesYComunas.find(item => item.region === regionSeleccionada);

    comunaRegistro.innerHTML = '<option value="" disabled selected>Seleccione una comuna</option>';

    if (objetoRegion) {
        comunaRegistro.disabled = false;
        objetoRegion.comunas.forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna;
            option.textContent = comuna;
            comunaRegistro.appendChild(option);
        });
    } else {
        comunaRegistro.disabled = true;
    }
});

/**
 * Función para validar un RUN chileno ingresado sin puntos ni guión
 */
function validarRUN(run) {
    const regExp = /^[0-9]{7,8}[0-9kK]$/;
    if (!regExp.test(run)) return false;

    const cuerpo = run.slice(0, -1);
    let dv = run.slice(-1).toUpperCase();

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
    const region = regionRegistro ? regionRegistro.value : "";
    const comuna = comunaRegistro ? comunaRegistro.value : "";
    const tipoUsuario = tipoUsuarioRegistro ? tipoUsuarioRegistro.value : "";
    const pwdReg = passwordRegistro.value.trim();
    const pwdConf = passwordConfirmar.value.trim();

    // Validación de campos vacíos
    if (
        nombre === "" || run === "" || correoReg === "" || correoConf === "" || 
        region === "" || comuna === "" || tipoUsuario === "" || pwdReg === "" || pwdConf === ""
    ) {
        mensajeResultado.textContent = "Debe completar todos los campos.";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    // Validación de RUN con dígito verificador
    if (!validarRUN(run)) {
        mensajeResultado.textContent = "El RUN ingresado no es válido. Ingréselo sin puntos ni guión (ej: 12345678K).";
        mensajeResultado.className = "alert alert-danger mt-4";
        return;
    }

    // Validación de relación Región - Comuna
    const objetoRegion = regionesYComunas.find(item => item.region === region);
    if (!objetoRegion || !objetoRegion.comunas.includes(comuna)) {
        mensajeResultado.textContent = "Debe seleccionar una región y comuna válidas.";
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