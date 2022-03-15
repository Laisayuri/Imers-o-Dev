//         chave.  valor.
var rafa = { nome: "Rafa", foto: "https://cf.shopee.com.br/file/a64e8c6b67fbdf1cbe94ff1aa3643a3e", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", foto: "https://media-exp1.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0/1556583729599?e=1648080000&v=beta&t=JlJikK8x2gehkNC55nNOYWjrzsfAtj0e8A2FyZOT4eY", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", foto: "https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1636535198.jpg", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var jogadorNovo = { nome: "", foto: "", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui];

function adicionarJogador() {
  var nomeJogador = document.getElementById("nomeJogador").value;
  document.getElementById("nomeJogador").value = "";
  var fotoJogador = document.getElementById("fotoJogador").value;
  document.getElementById("fotoJogador").value = "";
  
  jogadorNovo.nome = nomeJogador
  jogadorNovo.foto = fotoJogador
  jogadores.push(jogadorNovo)
  exibeJogadoresNaTela(jogadores)
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td><img src=" + jogadores[i].foto + "></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  for (var contador = 0; contador < jogadores.length; contador++) {
    if (contador != i) {
      var outrosJogadores = jogadores[contador];
      outrosJogadores.derrotas++;
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  for (
    var segundoIndice = 0;
    segundoIndice < jogadores.length;
    segundoIndice++
  ) {
    var jogador = jogadores[segundoIndice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function resetarJogo() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}
