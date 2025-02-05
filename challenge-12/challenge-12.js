	/*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

	/*
    Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
	let person = {
		name: "Name",
		lastname: "LastName",
		age: 20,
	};
	console.log('Propriedades de "person":');

	/*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
	Object.keys(person);

	/*
    Crie um array vazio chamado `books`.
    */
	let books = [];

	/*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
	books.push({ name: "Clean Code", pages: 464 });
	books.push({ name: "The Clean Coder", pages: 200 });
	books.push({ name: "Clean Architecture", pages: 432 });
	console.log("\nLista de livros:");

	/*
    Mostre no console todos os livros.
    */
	console.log(books);

	console.log("\nLivro que está sendo removido:");
	/*
    Remova o último livro, e mostre-o no console.
    */
	console.log(books.pop());

	console.log("\nAgora sobraram somente os livros:");
	/*
    Mostre no console os livros restantes.
    */
	console.log(books);

	/*
    Converta os objetos que ficaram em `books` para strings.
    */
	books[0] = JSON.stringify(books[0]);
	books[1] = JSON.stringify(books[1]);
	console.log("\nLivros em formato string:");

	/*
    Mostre os livros nesse formato no console:
    */
	console.log(books);

	/*
    Converta os livros novamente para objeto.
    */
	books[0] = JSON.parse(books[0]);
	books[1] = JSON.parse(books[1]);
	console.log("\nAgora os livros são objetos novamente:");

	/*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
    */
	
	for (let i in books) {
		for (let j in Object.keys(i)) {
			console.log(j + ": " + books[i][j]);
		}
	}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
