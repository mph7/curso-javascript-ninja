/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, 1.2, "teste", { sim: true }, [1, 2]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arr.push(item);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([2.3, 6, "string"]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(
  "O segundo elemento do segundo do segundo array é " + arr[5][1] + "."
);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");

let cont = 10;
while (cont <= 20) {
  if (cont % 2 === 0) {
    console.log(cont);
  }
  cont++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
let cont2 = 10;
while (cont2 <= 20) {
  if (cont2 % 2 !== 0) {
    console.log(cont2);
  }
  cont2++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");

for (let index = 100; index <= 120; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

console.log("Números ímpares entre 111 e 125:");

for (let index = 111; index <= 125; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}
