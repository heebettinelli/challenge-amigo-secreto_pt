
let amigos = [];
let copiaAmigos = [];

window.onload = function() {
    if (localStorage.getItem('amigos')) {
        amigos = JSON.parse(localStorage.getItem('amigos'));
        atualizarLista();
    }
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === ''){
        alert('Digite o nome do amigo!');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();

    localStorage.setItem('amigos', JSON.stringify(amigos));
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
            
    for (let i = 0; i < amigos.length; i++){
        let nome = document.createElement("li");
        nome.textContent = amigos[i];
        listaAmigos.appendChild(nome);
    }
}

function limparLista(){
    localStorage.removeItem('amigos');
    amigos = [];
    atualizarLista();
}

function sortearAmigo(nomeSorteador){
    if (amigos.length === 0){
        alert('Nenhum amigo adicionado!');
        return;
    }

    if (copiaAmigos.length === 0) {
        copiaAmigos = [...amigos];
    }

    let amigoSorteado;
    let indiceSorteado;

    do {
        indiceSorteado = Math.floor(Math.random() * copiaAmigos.length);
        amigoSorteado = copiaAmigos[indiceSorteado];
    } while (amigoSorteado == nomeSorteador);

    alert(`O amigo sorteado é: ${amigoSorteado}`);

    copiaAmigos.splice(indiceSorteado, 1);


    if (copiaAmigos.length === 0) {
        alert('Todos os amigos já foram sorteados!');
        limparLista();
        resetarSorteio();
    }
}

function resetarSorteio() {
    copiaAmigos = [];
    alert('A lista do sorteio foi resetada');
}

function limparCampos() {
    document.querySelectorAll("input, textarea").forEach(field => field.value = "");

    document.querySelectorAll("ul").forEach(list => list.innerHTML = "");

    localStorage.removeItem("amigos");

    amigos = [];
    copiaAmigos = [];
}



