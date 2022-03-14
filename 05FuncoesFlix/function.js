var listaFilme = [];
var listaFilmeNome = [];
function adicionarFilme() {
  var ver = false;
  var campoFilme = document.getElementById("filme").value;
  var campoFilmeNome = document.getElementById("nome").value;

  if (
    campoFilme.endsWith(".jpg") ||
    campoFilme.endsWith(".JPG") ||
    campoFilme.endsWith(".png")
  ) {
    for (var i = 0; i < listaFilme.length; i++) {
      if (campoFilme == listaFilme[i]) {
        ver = true;
      }
    }
    if (ver == true) {
      alert("Adicione uma URL que não tenha adicionado anteriomente!");
      document.getElementById("filme").value = "";
      return;
    } else {
      listaFilme.push(campoFilme);
      listaFilmeNome.push(campoFilmeNome);
    }
    listarFilmesNaTela(listaFilme);
  } else {
    alert("Insira um endereço de imagem válido!");
    document.getElementById("filme").value = "";
  }
}
function listarFilmesNaTela() {
  document.querySelector("#listaFilmes").innerHTML = "";
  for (i = 0; i < listaFilme.length; i++) {
    document.querySelector("#listaFilmes").innerHTML +=
      "<div class='formatFilmes'> <img src=" +
      listaFilme[i] +
      "><p>" +
      listaFilmeNome[i] +
      "</p> </div>";
  }
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

function removerFilme() {
  var veri = false;
  var remCampoFilme = document.getElementById("filme").value;
  for (i = 0; i < listaFilme.length; i++) {
    if (remCampoFilme == listaFilme[i]) {
      listaFilme.splice(i, 1);
      listaFilmeNome.splice(i, 1);
      listarFilmesNaTela();
      veri = true;
    }
  }
  if (veri == false) {
    alert("Não foi possível excluir este filme, ele não existe!");
  }
  document.getElementById("filme").value = "";
}
