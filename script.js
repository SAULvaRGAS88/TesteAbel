// <!-- fazer uma tela, com formulario, onde terá um nome e um telefone usando html, css e js salvando no localStorege -->
let pessoa = [];
function enviar(){
    var nom = document.getElementById('nome').value;
    var num = document.getElementById('cell').value;

    pessoa.push({ 'nome': nom, 'numero': num})

    localStorage.setItem('pessoa', JSON.stringify(pessoa));
    let pessoaString = localStorage.getItem('pessoa');
    let pessoaObj = JSON.parse(pessoaString);
    console.log(pessoaObj.nom.value); 
    console.log(pessoa)
}


