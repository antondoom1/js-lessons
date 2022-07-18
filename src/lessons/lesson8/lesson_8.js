// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// 'f'

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Number.prototype.plus = function (n) {
// 	return this + n
// }
//
// Number.prototype.minus = function (n) {
// 	return this - n
// }

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

// const glueString = (...str) => {
// 	let separator = str.splice(0, 1)
// 	return str.join(separator)
// }

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
// 	valueNode: 3,
// 	next: [{
// 		valueNode: 1,
// 		next: null
// 	},
// 		{
// 			valueNode: 3,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: null
// 		},
// 		{
// 			valueNode: 2,
// 			next: [
// 				{
// 					valueNode: 1,
// 					next: null
// 				},
// 				{
// 					valueNode: 5,
// 					next: null
// 				}
// 			]
// 		}]
// };
//
// const sumOfValuesRecursive = (obj) => {
// 	let result = obj.valueNode
//
// 	if (obj.next) {
// 		obj.next.forEach((v) => {
// 			result += sumOfValuesRecursive(v)
// 		})
// 	}
//
// 	return result
// }
//
// const sumOfValuesLoop = (obj) => {
// 	let result = 0
// 	let queue = [obj]
//
// 	while (queue.length) {
// 		const current = queue.pop()
//
// 		result += current.valueNode
//
// 		if (current.next) {
// 			current.next.forEach((v) => queue.push(v))
// 		}
// 	}
//
// 	return result
// }

// Task 5
// исправить код, что бы работал правильно

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }
//
// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i)
// 	}, 100)
// }

// for (var i = 0; i < 10; i++) {
// 	;(function (j) {
// 		setTimeout(function () {
// 			console.log(j)
// 		}, 100)
// 	})(i)
// }

// for (var i = 0; i < 10; i++) {
// 	const j = i
// 	setTimeout(function () {
// 		console.log(j)
// 	}, 100)
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
// 	this.name = name;
// 	this.author = author;
// 	return this;
// }
//
// function Foo(constructor, name, author) {
// 	return new constructor(name, author)
// }

//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name); // 'js'

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// const f = (...args) => {
// 	if (args.length > 1) return args.reduce((acc, el) => acc + el)
// 	const el = args[0]
// 	return (...args2) => {
// 		return el + args2.reduce((acc, el) => acc + el)
// 	}
// }

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// const f = (n = 0) => {
// 	let result = n
//
// 	return function (carryingN) {
// 		if (!carryingN) {
// 			return result
// 		} else {
// 			return f(carryingN + result)
// 		}
// 	}
// }

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

// const one = (value) => {
//   return value ? value + 1 : 1
// }

// const two = (value) => {
//   return value ? value + 2 : 2
// }

// const seven = (value) => {
//   return value ? value + 7 : 7
// }

// const plus = (value) => {
//   return value
// }

// const minus = (value) => {
//   return -value
// }

// console.log(seven(plus(one()))) // -> 8
// console.log(seven(minus(two()))) // -> 5

// Task 10
// Реализовать функцию сортировки массива пузырьком

// const bubbleSort = (arr) => {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		let isSorted = true
// 		for (let j = 0; j < arr.length - 1 - i; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				isSorted = false
// 				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
// 			}
// 		}
// 		if (isSorted) break
// 	}
// 	return arr
// }

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

// function isBalanced(str) {
//   let br = '(){}[]'
//   let st = []
//   for (let i = 0; i < str.length; ++i) {
//     let ch = str[i]
//     let ind = br.indexOf(ch)
//     if (ind >= 0) {
//       if (ind & 1) {
//         if (!st.length) return false
//         let last_br = st.pop()
//         if (last_br != br[ind - 1]) return false
//       } else {
//         st.push(ch)
//       }
//     }
//   }
//   return !st.length
// }

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 4},
        {value: 5}
      ]
    },
    {
      value: 3,
      children: [
        {value: 6},
        {value: 7}
      ]
    }
  ]
}

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

Promise
  .resolve()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))

Promise
  .resolve()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6))