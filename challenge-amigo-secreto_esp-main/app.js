// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigos');
    let amigoUsuario = inputAmigo.value.trim();

    if (amigoUsuario === '') {
        alert('Debes ingresar un nombre, porfavor (⁠◕⁠ᴗ⁠◕⁠✿⁠)');
    } else if (amigos.includes(amigoUsuario)) {
        alert('Este nombre ya fue registrado! indica otro nombre, porfavor (⁠◡⁠ ⁠ω⁠ ⁠◡⁠)');
    } else {
        amigos.push(amigoUsuario); //para agregar en Array 
        inputAmigo.value = ''; //para limpiar el input
        inputAmigo.focus(); //para que el cursor se mantenga en el input
        mostrarAmigos(); //para mostrar la lista de amigos
    }  
}  
   
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Porfavor agregar amigxs antes de sortear:3')
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigx sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}