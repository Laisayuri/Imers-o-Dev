var filme = document.getElementById("filmeAdicionado");
var listaFilmes = [
    "https://vortexcultural.com.br/images/2021/12/um-homem-de-familia.jpg",
    "https://vortexcultural.com.br/images/2021/12/homem-aranha-3.jpg",
    "https://vortexcultural.com.br/images/2022/01/nobody_xlg.jpg",
    "https://vortexcultural.com.br/images/2021/12/Turma-da-Monica-Licoes.jpg", 
    "https://04ArrayListaFlix/101Dalmatas.jpeg"

// http://www.grupoestacao.com.br/site/images/posters/acincopassosdevc.jpg //

for (var indice = 0; indice < listaFilmes.length; indice++) {
  filme.innerHTML += "<img src=" + listaFilmes[indice] + ">";
  // document.write("<img src=" + listaJogos[i] + ">"); //
}

function Inserir() {
  var url = document.getElementById("urlInserida").value;
  listaFilmes.push(url);
  filme.innerHTML = filme.innerHTML + "<img src=" + url + ">";
}
//width= '250px' height='250px'//

function Sortear() {
  let palavras = listaFilmes;
  let sorteio = Math.floor(Math.random() * palavras.length);
  filme.innerHTML = filme.innerHTML + "<img src=" + palavras[sorteio] + ">";
  var botao = document.getElementById("botaoSortear");
  botao.addEventListener("click", Sortear);
}
