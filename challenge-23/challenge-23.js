(function (window, document) {
	"use strict";
	/*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

	let $screen = document.querySelector('[data-js="screen"]');

	let $number0 = document.querySelector('[data-js="button0"]');
	let $number1 = document.querySelector('[data-js="button1"]');
	let $number2 = document.querySelector('[data-js="button2"]');
	let $number3 = document.querySelector('[data-js="button3"]');
	let $number4 = document.querySelector('[data-js="button4"]');
	let $number5 = document.querySelector('[data-js="button5"]');
	let $number6 = document.querySelector('[data-js="button6"]');
	let $number7 = document.querySelector('[data-js="button7"]');
	let $number8 = document.querySelector('[data-js="button8"]');
	let $number9 = document.querySelector('[data-js="button9"]');

	let $clear = document.querySelector('[data-js="buttonCE"]');

	let $plus = document.querySelector('[data-js="buttonPlus"]');
	let $minus = document.querySelector('[data-js="buttonMinus"]');
	let $multiply = document.querySelector('[data-js="buttonMultiply"]');
	let $divide = document.querySelector('[data-js="buttonDivide"]');

	let $equal = document.querySelector('[data-js="buttonEqual"]');

	let addNumber0 = () => addNumber(0);
	let addNumber1 = () => addNumber(1);
	let addNumber2 = () => addNumber(2);
	let addNumber3 = () => addNumber(3);
	let addNumber4 = () => addNumber(4);
	let addNumber5 = () => addNumber(5);
	let addNumber6 = () => addNumber(6);
	let addNumber7 = () => addNumber(7);
	let addNumber8 = () => addNumber(8);
	let addNumber9 = () => addNumber(9);

	function addNumber(number) {
		$screen.value += number;
	}

	$number0.addEventListener("click", addNumber0, false);
	$number1.addEventListener("click", addNumber1, false);
	$number2.addEventListener("click", addNumber2, false);
	$number3.addEventListener("click", addNumber3, false);
	$number4.addEventListener("click", addNumber4, false);
	$number5.addEventListener("click", addNumber5, false);
	$number6.addEventListener("click", addNumber6, false);
	$number7.addEventListener("click", addNumber7, false);
	$number8.addEventListener("click", addNumber8, false);
	$number9.addEventListener("click", addNumber9, false);

	$clear.addEventListener("click", () => ($screen.value = ""), false);

	let addPlus = () => addSignal("+");
	let addMinus = () => addSignal("-");
	let addMultiply = () => addSignal("x");
	let addDivide = () => addSignal("÷");

	function addSignal(signal) {
		let regex = /[\+\-x÷]$/g;
		if (regex.test($screen.value)) {
			$screen.value = $screen.value.slice(0, -1) + signal;
		} else if ($screen.value !== "") {
			$screen.value = $screen.value + signal;
		}
	}

	$plus.addEventListener("click", addPlus, false);
	$minus.addEventListener("click", addMinus, false);
	$multiply.addEventListener("click", addMultiply, false);
	$divide.addEventListener("click", addDivide, false);

	function calculate() {
		let str = $screen.value.replace(/(?:[+\-x÷]+$)/gim, "").replace(/÷/g, "/");

		while (/[x/]/gim.test(str)) {
			str = str.replace(/(\d+)([x\/])(\d+)/, function (full, num1, op, num2) {
				num1 = Number(num1);
				num2 = Number(num2);
				return op === "x" ? num1 * num2 : num1 / num2;
			});
		}

		while (/[+\-]/gim.test(str)) {
			str = str.replace(/(\d+)([+-])(\d+)/, function (full, num1, op, num2) {
				num1 = Number(num1);
				num2 = Number(num2);
				return op === "+" ? num1 + num2 : num1 - num2;
			});
		}
		$screen.value = str;
	}

	$equal.addEventListener("click", calculate, false);
})(window, document);
