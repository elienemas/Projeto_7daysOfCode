
//Qual o seu nome?
//Quantos anos você tem?
//Qual linguagem de programação você está estudando?

const input  = require("readline-sync")

console.log("Olá, que bom ver você por aqui!")

 let nome = input.question("Qual seu nome?   ");
 let idade = input.question("Qual sua idade?  ");
 let ling = input.question ("Qual linguagem de programacao voce esta estudando?, se nao existir digite nenhuma  ");

 if ( nome  === "" || 
   idade === "" ||
    ling === "" ){
console.log ("Você esqueceu de inserir alguma informação!!");
} if (ling == "nenhuma" ){
 console.log (`Seu nome é ${nome}, você tem ${idade} anos, e não está aprendendo nenhuma linguagem `);
 } else {
console.log (`Seu nome é ${nome}, você tem ${idade} anos e está estudando ${ling} `)
};


let resposta = input.question( `Você se identificou com a LINGUAGEM ${ling} ? Se SIM - Digite 1 se NAO -  Digite 2:  `);

if (resposta == 1){  
    console.log (" Que Maravilha que você gostou da linguagem, dedique-se que você irá longe");
}
if (resposta == 2){
   console.log ("Uma pena! Busque conhecer novas linguagens!" )
};

