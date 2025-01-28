//Primero se define el Array para almacenar los nombres.
let amigos = [];

// Se crea una función para agregar amigos al array
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let input = document.getElementById("amigo").value.trim();

    // Se valida que el campo no esté vacío
    if (input === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Se añade el nombre al array
    amigos.push(input);

    // Se limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizamos la lista visual
    actualizarLista();
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
    // Obtener la lista HTML
    let listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaHTML.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista HTML
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

