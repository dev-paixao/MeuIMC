function trocarIcone() {
    var sexo = document.getElementById('sexo').value;
    var iconeMasculino = document.getElementById('icone-masculino');
    var iconeFeminino = document.getElementById('icone-feminino');

    if (sexo === 'masculino') {
        iconeMasculino.style.display = 'block';
        iconeFeminino.style.display = 'none';
    } else if (sexo === 'feminino') {
        iconeMasculino.style.display = 'none';
        iconeFeminino.style.display = 'block';
    }
}