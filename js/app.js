document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value) / 100; // Converter para metros
  var sexo = document.getElementById('sexo').value;
  var idade = parseInt(document.getElementById('idade').value);

  var imc = peso / (altura * altura);
  var pesoIdealMin, pesoIdealMax;

  if (sexo === 'masculino') {
    pesoIdealMin = (altura * 100 - 100) - ((altura * 100 - 100) * 0.1);
    pesoIdealMax = (altura * 100 - 100);
  } else {
    pesoIdealMin = (altura * 100 - 100) - ((altura * 100 - 100) * 0.15);
    pesoIdealMax = (altura * 100 - 100);
  }
  
  var pesoIdeal = pesoIdealMin.toFixed(1) + ' kg a ' + pesoIdealMax.toFixed(1) + ' kg';
  
  var pesoMinAPerder = (peso - pesoIdealMax).toFixed(1);
  var pesoMaxAPerder = (peso - pesoIdealMin).toFixed(1);
  var pesoMinAGanhar = (pesoIdealMin - peso).toFixed(1);
  var pesoMaxAGanhar = (pesoIdealMax - peso).toFixed(1);
  
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Seu IMC: ' + imc.toFixed(1) + '<br>';

  if (imc < 18.5) {
      resultado.innerHTML += 'Classificação: Abaixo do peso<br>';
  } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML += 'Classificação: Peso normal<br>';
  } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML += 'Classificação: Sobrepeso<br>';
  } else if (imc >= 30 && imc < 35) {
      resultado.innerHTML += 'Classificação: Obesidade grau I<br>';
  } else if (imc >= 35 && imc < 40) {
      resultado.innerHTML += 'Classificação: Obesidade grau II (severa)<br>';
  } else {
      resultado.innerHTML += 'Classificação: Obesidade grau III (mórbida)<br>';
  }
  
  resultado.innerHTML += 'Peso Ideal fica entre: ' + pesoIdeal + '<br>';

  if (peso > pesoIdealMax) {
    resultado.innerHTML += 'Peso a Perder: Entre ' + pesoMinAPerder + ' kg e ' + pesoMaxAPerder + ' kg';
  } else if (peso < pesoIdealMin) {
    resultado.innerHTML += 'Peso a Ganhar: Entre ' + pesoMinAGanhar + ' kg e ' + pesoMaxAGanhar + ' kg';
  }
});
