// <!-- fazer uma tela, com formulario, onde terá um nome e um telefone usando html e js para salvar no localStorege -->
// <!-- fazer uma tela, com formulario, onde terá um nome e um telefone usando html, css e js salvando no localStorege -->
let pessoa = [];
function enviar() {
function enviar(){
    var nom = document.getElementById('nome').value;
    var num = document.getElementById('cell').value;

    //foi adicionado uma fução, onde apos o invio dos dados, o input fica limpo, pronto para receber novos dados
    document.getElementById('nome').value=''; // Limpa o campo
    document.getElementById('cell').value=''; // Limpa o campo

    pessoa.push({ 'nome': nom, 'numero': num })
    pessoa.push({ 'nome': nom, 'numero': num})

    localStorage.setItem('pessoa', JSON.stringify(pessoa));
    let pessoaString = localStorage.getItem('pessoa');
    let pessoaObj = JSON.parse(pessoaString);


    //.value estava bunado o codigo. sua remoção fez com que o bug fosse resolvido
    console.log(pessoaObj.nom);
    console.log(pessoaObj.nom.value); 
    console.log(pessoa)
}
}



