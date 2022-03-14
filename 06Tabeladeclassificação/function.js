var pessoas = [
    {
      nome: "Simpons",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnxrVHXgie5Xk4QlNqCxUIStehQRWB9SsUw&usqp=CAU",
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    },
    {
      nome: "Sonic",
      imagem:
        "http://images.eurogamer.net/2013/articles//a/1/5/8/1/1/0/0/eurogamer-38ftlr.jpg/EG11/resize/600x-1/quality/91",
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    },
    {
      nome: "Shrek",
      imagem:
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/1621553338681.webp",
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    }
  ];
  
  function novoJogador() {
    var novoJogador = document.getElementById("novoJogador").value;
    var imagemJogador = document.getElementById("imagemJogador").value;
    pessoas.push({
      nome: novoJogador,
      imagem: imagemJogador,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    });
    exibeJogadoresNaTela(pessoas);
    document.getElementById("novoJogador").value = "";
    document.getElementById("imagemJogador").value = "";
  }
  
  function zerarPontos() {
    for (i = 0; i < pessoas.length; i++) {
      pessoas[i].vitorias = 0;
      pessoas[i].derrotas = 0;
      pessoas[i].empates = 0;
      pessoas[i].pontos = 0;
    }
    exibeJogadoresNaTela(pessoas);
  }
  
  exibeJogadoresNaTela(pessoas);
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    jogador.pontos = pontos;
  }
  
  function exibeJogadoresNaTela(pessoas) {
    var elemento = "";
    for (i = 0; i < pessoas.length; i++) {
      elemento += "<tr><td><img src=" + pessoas[i].imagem + "></td>";
      elemento += "<td>" + pessoas[i].nome + "</td>";
      elemento += "<td>" + pessoas[i].vitorias + "</td>";
      elemento += "<td>" + pessoas[i].empates + "</td>";
      elemento += "<td>" + pessoas[i].derrotas + "</td>";
      elemento += "<td>" + pessoas[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" +
        i +
        ")'>Derrota</button></td></tr>";
    }
    document.querySelector("#tabelaJogadores").innerHTML = elemento;
  }
  
  function adicionarVitoria(i) {
    pessoas[i].vitorias++;
    calculaPontos(pessoas[i]);
    for (y = 0; y < pessoas.length; y++) {
      if (pessoas[y].nome !== pessoas[i].nome) {
        pessoas[y].derrotas++;
      }
    }
    exibeJogadoresNaTela(pessoas);
  }
  
  function adicionarEmpate() {
    for (i = 0; i < pessoas.length; i++) {
      pessoas[i].empates++;
      calculaPontos(pessoas[i]);
    }
    exibeJogadoresNaTela(pessoas);
  }
  
  function adicionarDerrota(i) {
    pessoas[i].derrotas++;
    for (y = 0; y < pessoas.length; y++) {
      if (pessoas[y].nome !== pessoas[i].nome) {
        pessoas[y].vitorias++;
        calculaPontos(pessoas[y]);
      }
    }
    exibeJogadoresNaTela(pessoas);
  }
  