// Función para verificar si hay texto ingresado
function verificarTexto() {
    const texto = document.querySelector('.text-area').value.trim();
    if (texto === "") {
        alert("Por favor, ingresa un texto antes de continuar."); // Mensaje de advertencia
        return false; // Retorna false si no hay texto
    }
    return true; // Retorna true si hay texto
}

function borrarTexto() {
    document.querySelector('.text-area').value = ""; // Limpiar área de entrada
    condicionesIniciales(); // Restablecer condiciones iniciales
    document.getElementById("presentacion__desaparece").style.display = "block";
    document.getElementById("body").scrollIntoView({ behavior: 'smooth' });
}

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncripta() {
    if (!verificarTexto()) return; // Verificar texto antes de continuar

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mostrarResultado();
    textArea.value = "";
    document.getElementById("presentacion__Salida").scrollIntoView({ behavior: 'smooth' });
}

function btnDesencripta() {
    if (!verificarTexto()) return; // Verificar texto antes de continuar
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mostrarResultado();
    document.getElementById("presentacion__Salida").scrollIntoView({ behavior: 'smooth' });
}

// Función para encriptar el texto según reglas específicas
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["é", "enter"], ["í", "imes"], ["á", "ai"], ["ó", "ober"], ["ú", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// Función para mostrar el resultado en el área de salida
function mostrarResultado(texto) {
    document.getElementById("presentacion__desaparece").style.display = "none";
    document.getElementById("codificado").style.display = "block";
    document.getElementById("boton_copiar").style.display = "block";
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
    document.getElementById("body").scrollIntoView({ behavior: 'smooth' });
}

// Función para establecer las condiciones iniciales de visualización
function condicionesIniciales() {
    document.getElementById("codificado").style.display = "none"; // Ocultar área de salida
    document.getElementById("boton_copiar").style.display = "none"; // Ocultar botón de copiar
}

// Inicializar condiciones al cargar la página
condicionesIniciales();