let btnEnviar = document.getElementById("btnEnviar");

let divP = document.getElementById('divP');

let card = document.getElementById('card')
let cards = document.getElementById('cards');

btnEnviar.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    let titulo = document.getElementById("titulo").value;
    let imagem = document.getElementById("urlimagem").value;
    let descricao = document.getElementById("descricao").value;
    
    let novaReceita = {
        img: imagem,
        titulo: titulo,
        descricao: descricao
    }

    addCard()

    card.innerHTML = `

        
        <img id="imagem" class="card-img-top" src=${novaReceita.img} alt="">
        <div class="card-body">
            <h5 class="card-title">${novaReceita.titulo}</h5>
            <p class="card-text" >${novaReceita.descricao}</p>
            <button type="button" class="btn btn-primary btn-primary-custom" data-bs-toggle="modal" data-bs-target="#Bobodecamaraomoldal">Ver Receita</button>
        </div>

    `
    // cards.appendChild(card)
    // appendChild as first child
    cards.insertBefore(card, cards.firstChild)

    clearInput()

});


let addCard = () => {
    const newCard = card.cloneNode(true);
    cards.appendChild(newCard);

}

function clearInput() {
    document.getElementById("formId").reset();
}







let titulo = document.querySelector("#titulo");
let urlimagem = document.querySelector("#urlimagem");
let descricao = document.querySelector("#descricao");



// // insert date in the input descricao
// let data = new Date();
// let dia = data.getDate();
// let mes = data.getMonth() + 1;
// let ano = data.getFullYear();
// let dataAtual = dia + "/" + mes + "/" + ano;
// descricao.value = dataAtual;

// // insert text example in the input titulo
// let tituloExemplo = "Exemplo: Bolo de cenoura";
// titulo.value = tituloExemplo;

// // insert image link example in the input urlimagem
// let urlExemplo = "https://media.istockphoto.com/id/1313708601/pt/foto/carrot-cake-with-chocolate-icing-brazilian-cake.jpg?s=612x612&w=0&k=20&c=XoZZgYXNyEcoKkY0hAEzcOYT3wqlAm5rCCK_9qV1naQ=";
// urlimagem.value = urlExemplo;

