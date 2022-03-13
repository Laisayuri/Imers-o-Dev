function calculaMedia(){
    var notaPrimeiroBimestre = parseInt(document.getElementById("nota1").value);
    var notaSegundoBimestre = parseInt(document.getElementById("nota2").value);
    var notaTerceiroBimestre = parseInt(document.getElementById("nota3").value);
    var notaQuartoBimestre = parseInt(document.getElementById("nota4").value);
    
    var media = (((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1))
    
    if (media <= 5 ){
      var status = "REPROVADO"
    } else {
      var status = "APROVADO"
    }
    
    document.getElementById("resultado").innerHTML = "<label id='resultado'>Sua média foi = " + media + " você foi " + status + "</label>"
  }
  
  
  // var nome = "Beth"
  
  // console.log("bem vinda" + nome)
  // var notaDoPrimeiroTrimestre = 6
  // var notaDoSegundoTirmestre = 8
  // var notaDoTerceiroTrimestre = 4
  // var notaFinal = (notaDoPrimeiroTrimestre + notaDoSegundoTirmestre + notaDoTerceiroTrimestre) / 4
  // var notaFixada = notaFinal.toFixed (1)
  // console.log(notaFixada)
  