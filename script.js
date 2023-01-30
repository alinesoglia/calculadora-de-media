let realizarCalculo = true;

function Calcular() {
  let notaDoPrimeiroBimestre = document.getElementById("primeiro").value;
  let notaDoSegundoBimestre = document.getElementById("segundo").value;
  let notaDoTerceiroBimestre = document.getElementById("terceiro").value;
  let notaDoQuartoBimestre = document.getElementById("quarto").value;

  if (
    notaDoPrimeiroBimestre == "" ||
    notaDoSegundoBimestre == "" ||
    notaDoTerceiroBimestre == "" ||
    notaDoQuartoBimestre == ""
  ) {
    realizarCalculo = false;
    alert("Por favor, preencha todos os campos para calcular sua média!");
  }

  if (
    notaDoPrimeiroBimestre > 10 ||
    notaDoPrimeiroBimestre < 0 ||
    notaDoSegundoBimestre > 10 ||
    notaDoSegundoBimestre < 0 ||
    notaDoTerceiroBimestre > 10 ||
    notaDoTerceiroBimestre < 0 ||
    notaDoQuartoBimestre > 10 ||
    notaDoQuartoBimestre < 0
  ) {
    realizarCalculo = false;
    alert("Insira valores de 0 a 10");
  }

  if (realizarCalculo) {
    let valorPrimeiroBimestre = parseFloat(notaDoPrimeiroBimestre);
    let valorSegundoBimestre = parseFloat(notaDoSegundoBimestre);
    let valorTerceiroBimestre = parseFloat(notaDoTerceiroBimestre);
    let valorQuartoBimestre = parseFloat(notaDoQuartoBimestre);

    let soma =
      valorPrimeiroBimestre +
      valorSegundoBimestre +
      valorTerceiroBimestre +
      valorQuartoBimestre;

    let notaFinal = (soma / 4).toFixed(1);

    let elementoMédia = document.getElementById("média");
    let média = "Sua média é " + notaFinal;
    elementoMédia.innerHTML = média;

    let elementoAprovadoReprovado = document.getElementById(
      "aprovadoReprovado"
    );
    if (notaFinal < 6) {
      elementoAprovadoReprovado.innerHTML = "Você está reprovado!";
    } else {
      elementoAprovadoReprovado.innerHTML = "Você está aprovado!";
    }
  } else {
    realizarCalculo = true;
  }
}

function limitDecimalPlaces(e, count) {
  if (e.target.value.indexOf(".") == -1) {
    return;
  }
  if (e.target.value.length - e.target.value.indexOf(".") > count) {
    e.target.value = parseFloat(e.target.value).toFixed(count);
  }
}
