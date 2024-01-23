// Ativar link do menu conforme a página atual
const links = document.querySelectorAll(".header-menu a");

function ativarLink (link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add("ativo");  
    }
}

links.forEach(ativarLink);


// Ativar itens do orçamento
const parametros = new URLSearchParams(window.location.search);

function ativarProduto (parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta (event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa);
    
}

function eventosPerguntas (pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Imagens galeria

const imagensGaleria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function galeriaTrocar (event) {
    const imagem = event.currentTarget;
    const media = window.matchMedia("(min-width: 936px)").matches;

    if (media) {
        galeriaContainer.prepend(imagem);
    }  
}

function galeriaClique (imagem) {
    imagem.addEventListener("click", galeriaTrocar);
}

imagensGaleria.forEach(galeriaClique);


/* Animação Plugin */
if (window.SimpleAnime) {
    new SimpleAnime();
}
