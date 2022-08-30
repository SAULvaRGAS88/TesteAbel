// <!-- fazer uma tela, com formulario, onde terá um nome e um telefone usando html, css e js salvando no localStorege -->
var pessoa = [];
function enviar(){
    var nom = document.getElementById('nome').value;
    var num = document.getElementById('cell').value;

    pessoa.push({ 'nome': nom, 'numero': num})
    
    console.log(pessoa)
}
