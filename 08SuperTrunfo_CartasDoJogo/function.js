var carta1 = {
    nome: "Tigress",
    imagem:
      "https://uploads.spiritfanfiction.com/historias/capas/201907/story-gives-tigress-16944853-080720191930.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Sr. Ping",
    imagem:
      "https://i.pinimg.com/736x/de/0b/9e/de0b9ec3b2ada3597c17899fb189a706--kung-fu-panda-love-you-dad.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Mestre Shifu",
    imagem:
      "http://images.uncyc.org/pt/thumb/7/73/Mestreshifu.jpg/175px-Mestreshifu.jpg",
    atributos: {
      ataque: 5,
      defesa: 8,
      magia: 10
    }
  };
  
  var carta4 = {
    nome: "Master Monkey",
    imagem:
      "https://static.wikia.nocookie.net/kungfupanda/images/f/f9/KFP3-promo-monkey1.jpg/revision/latest?cb=20150726165704",
    atributos: {
      ataque: 2,
      defesa: 10,
      magia: 3
    }
  };
  
  var carta5 = {
    nome: "Mei Mei",
    imagem:
      "https://static.wikia.nocookie.net/kungfupanda/images/3/3d/Mei-Mei.jpg/revision/latest?cb=20180509141530",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta6 = {
    nome: "Master Monkey",
    imagem:
      "https://static.wikia.nocookie.net/kungfupanda/images/f/f9/KFP3-promo-monkey1.jpg/revision/latest?cb=20150726165704",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta7 = {
    nome: "Oogway",
    imagem:
      "https://static.wikia.nocookie.net/character-stats-and-profiles/images/d/d3/EKTwbfMUEAgrwTc.jpg/revision/latest?cb=20200612053140",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta8 = {
    nome: "Mestre Rino Trovão",
    imagem:
      "https://static.wikia.nocookie.net/kungfupanda/images/5/5d/ThunderingRhino2.jpg/revision/latest?cb=20160326153444",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta9 = {
    nome: "Master Croc",
    imagem: "https://i.redd.it/9pxuxw7ud3c51.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta10 = {
    nome: "Master Chicken",
    imagem:
      "https://static.wikia.nocookie.net/yunas-princess-adventure/images/2/27/Master_Chicken.png/revision/latest?cb=20180102202010",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
  ];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numeroCartaJogador];
    // console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'checked>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  