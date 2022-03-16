var card1 = {
    nome: "Dr. Octopus",
    img: "https://sm.ign.com/ign_br/screenshot/default/doutor-octopus_5t9r.jpg",
    attributes: {
      attack: 9,
      defense: 8,
      stealth: 2,
      support: 5
    }
  };
  var card2 = {
    nome: "Duende Verde",
    img:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/12/duende-verde-2-760x314.jpg",
    attributes: {
      attack: 8,
      defense: 6,
      stealth: 6,
      support: 8
    }
  };
  var card3 = {
    nome: "Lagarto",
    img:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/12/lagarto-760x428.jpg",
    attributes: {
      attack: 5,
      defense: 6,
      stealth: 5,
      support: 9
    }
  };
  var card4 = {
    nome: "Homem-Areia",
    img:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/12/homem-areia-760x428.jpg",
    attributes: {
      attack: 8,
      defense: 5,
      stealth: 9,
      support: 2
    }
  };
  
  var cards = [card1, card2, card3, card4];
  var cardMachine;
  var cardPlayer;
  
  function sortearCarta() {
    var nCardMachine = parseInt(Math.random() * cards.length);
    var nCardPlayer = parseInt(Math.random() * cards.length);
    while (nCardMachine == nCardPlayer) {
      nCardPlayer = parseInt(Math.random() * cards.length);
    }
    cardMachine = cards[nCardMachine];
    cardPlayer = cards[nCardPlayer];
  
    document.getElementById("ghost").src = cardPlayer.img;
    document.getElementById("nome").innerHTML = cardPlayer.nome;
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
    document.getElementById("resultado").innerHTML = "";
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    var icon = [];
    for (var atributo in cardPlayer.attributes) {
      opcoesTexto +=
        "<input id='" +
        atributo +
        "' class='radio-input' type='radio' name='atributo' value='" +
        atributo +
        "'><label class='label-radio' for='" +
        atributo +
        "'> " +
        atributo +
        " </label>";
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valueCardPlayer = cardPlayer.attributes[atributoSelecionado];
    var valueCardMachine = cardMachine.attributes[atributoSelecionado];
    if (valueCardPlayer > valueCardMachine) {
      elementoResultado.innerHTML =
        "Você venceu!<br>Seu oponente: " + cardMachine.nome;
    } else if (valueCardPlayer == valueCardMachine) {
      elementoResultado.innerHTML =
        "Você empatou!<br>Seu oponente: " + cardMachine.nome;
    } else {
      elementoResultado.innerHTML =
        "Você perdeu!<br>Seu oponente: " + cardMachine.nome;
    }
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("opcoes").innerHTML = "";
  }
  