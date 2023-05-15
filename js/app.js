document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value) / 100; // Converter para metros
    var sexo = document.getElementById('sexo').value;
    var idade = parseInt(document.getElementById('idade').value);
  
    var imc = peso / (altura * altura);
    var imcIdeal;
    var pesoIdeal;
  
    if (sexo === 'masculino') {
      imcIdeal = 24.9;
      pesoIdeal = (imcIdeal * (altura * altura)).toFixed(1);
    } else {
      imcIdeal = 24.9;
      pesoIdeal = (imcIdeal * (altura * altura)).toFixed(1);
    }
  
    var pesoAPerder = (peso - pesoIdeal).toFixed(1);
    var pesoAGanhar = (pesoIdeal - peso).toFixed(1);
  
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Seu IMC: ' + imc.toFixed(1) + '<br>' +
                          'Peso Ideal: ' + pesoIdeal + ' kg' + '<br>' +
                          'Peso a Perder: ' + pesoAPerder + ' kg' + '<br>' +
                          'Peso a Ganhar: ' + pesoAGanhar + ' kg';
  });
  