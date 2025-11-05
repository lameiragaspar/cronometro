const produtos = [
    {id:1, nome: "Pedro", idade: 20},
    {id:2, nome: "Mariana", idade: 18},
    {id:3, nome: "Naureth", idade: 21}
];

function imprimirNome(produto){
    console.log(produto.nome)
}

produtos.forEach(imprimirNome)