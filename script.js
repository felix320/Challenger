// Función para verificar si hay texto ingresado
function verificarTexto() {
    const texto = document.querySelector('.presentacion__ingreso__texto').value.trim();
    if (texto === "") {
        alert("Por favor, ingresa un texto antes de continuar."); // Mensaje de advertencia
        return false; // Retorna false si no hay texto
    }
    return true; // Retorna true si hay texto
}

function borrarTexto() {
    document.querySelector('.presentacion__ingreso__texto').value = ""; // Limpiar área de entrada
    condicionesIniciales(); // Restablecer condiciones iniciales
    document.getElementById("presentacion__desaparece").style.display = "block";
    document.getElementById("body").scrollIntoView({ behavior: 'smooth' });
}

// Función para encriptar el texto ingresado
function encripta() {
    if (!verificarTexto()) return; // Verificar texto antes de continuar

    const textoOriginal = document.querySelector('.presentacion__ingreso__texto').value.toLowerCase();
    const textoEncriptado = encriptarTexto(textoOriginal);
    mostrarResultado(textoEncriptado);
    document.getElementById("presentacion__Salida").scrollIntoView({ behavior: 'smooth' });
}

// Función para desencriptar el texto ingresado
function desencripta() {
    if (!verificarTexto()) return; // Verificar texto antes de continuar

    const textoEncriptado = document.querySelector('.presentacion__ingreso__texto').value.toLowerCase();
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    mostrarResultado(textoDesencriptado);
    document.getElementById("presentacion__Salida").scrollIntoView({ behavior: 'smooth' });
}

// Función para encriptar el texto según reglas específicas
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

        .replace(/é/g, "enter")
        .replace(/í/g, "imes")
        .replace(/á/g, "ai")
        .replace(/ó/g, "ober")
        .replace(/ú/g, "ufat");
}

// Función para desencriptar el texto según reglas específicas
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para mostrar el resultado en el área de salida
function mostrarResultado(texto) {
    document.getElementById("presentacion__desaparece").style.display = "none";
    document.getElementById("codificado").style.display = "block";
    document.getElementById("boton_copiar").style.display = "block";
    const codificado = document.getElementById("codificado");
    codificado.value = texto;
    ajustarTextarea(codificado);
}

// Función para ajustar la altura del área de texto dinámicamente
function ajustarTextarea(textarea) {
    textarea.style.height = 'auto'; // Reiniciar altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar a la altura del contenido
}

// Función para copiar el texto del área de salida al portapapeles
function copiarTexto() {
    const textoCopiado = document.getElementById("codificado");
    textoCopiado.select(); // Seleccionar el texto
    document.execCommand("copy"); // Copiar el texto seleccionado
}

// Función para establecer las condiciones iniciales de visualización
function condicionesIniciales() {
    document.getElementById("codificado").style.display = "none"; // Ocultar área de salida
    document.getElementById("boton_copiar").style.display = "none"; // Ocultar botón de copiar
}

// Inicializar condiciones al cargar la página
condicionesIniciales();
