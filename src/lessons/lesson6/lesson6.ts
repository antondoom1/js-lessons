console.log('Lesson 6')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// type StudentType = {
//   name: string
//   lastName: string
//   group: number
//   score: number[]
// }
//
// class Student {
//   constructor(public name: string, public lastName: string, public group: number, public score: number[]) {
//     this.name = name
//     this.lastName = lastName
//     this.group = group
//     this.score = score
//   }
// }
//
// const students = [
//   new Student('Anton', 'Yakavenka', 53, [5, 5, 5, 5, 5]),
//   new Student('Darya', 'Ihnatenka', 55, [4, 4, 5, 5, 5]),
//   new Student('Igor', 'Ospishev', 53, [5, 5, 4, 5, 4]),
//   new Student('Dima', 'Bortich', 52, [3, 5, 4, 5, 3]),
//   new Student('Natalia', 'Kolesnichenko', 54, [3, 3, 4, 5, 4]),
//   new Student('Vitaliy', 'Kolesnichenko', 54, [2, 3, 3, 3, 4]),
//   new Student('Veronika', 'Klyuchnik', 54, [5, 5, 4, 5, 5]),
//   new Student('Eugen', 'Viaroha', 52, [5, 4, 4, 3, 5]),
//   new Student('Irina', 'Maslo', 52, [1, 2, 2, 4, 3]),
//   new Student('Alyaksey', 'Darid', 53, [1, 2, 2, 2, 1])
// ]
//
// const sortedStudents = students
//   .map((el) => ({
//     ...el,
//     averageScore: el.score.reduce((acc, el) => acc + el) / el.score.length
//   }))
//   .sort((a, b) => a.averageScore > b.averageScore ? 1 : -1)
//
// const showBest = (arr: StudentType[]) => {
//   return arr
//     .filter(el => !el.score.includes(1) && !el.score.includes(2) && !el.score.includes(3))
//     .map(el => `name: ${el.name}, last name: ${el.lastName}, group: ${el.group}`)
// }
//
// console.log(sortedStudents)
// console.log(showBest(students))

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? нет
// Можно ли создать метод класса который будет удалять экземпляр класса? нет

// class SomeClass {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// class Clock {
//
//   // @ts-ignore
//   #hours = new Date().getHours()
//   // @ts-ignore
//   #minutes = new Date().getMinutes()
//   // @ts-ignore
//   #seconds = new Date().getSeconds()
//
//   set hours(value: number) {
//     if (value > 60 || value < 0) console.log('Incorrect hours value')
//     this.#hours = value
//   }
//
//   set minutes(value: number) {
//     if (value > 60 || value < 0) console.log('Incorrect minutes value')
//     this.#minutes = value
//   }
//
//   set seconds(value: number) {
//     if (value > 60 || value < 0) console.log('Incorrect seconds value')
//     this.#seconds = value
//   }
//
//   getTime() {
//     return console.log(`${this.#hours}:${this.#minutes}:${this.#seconds}`)
//   }
// }
//
// const newClock = new Clock()
//
// newClock.getTime()


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// class Buyer {
//   // @ts-ignore
//   #lastName = ''
//   // @ts-ignore
//   #name = ''
//   // @ts-ignore
//   #address = ''
//   // @ts-ignore
//   #iban = ''
//
//   constructor(lastName: string, name: string, address: string, iban: string) {
//     this.#lastName = lastName
//     this.#name = name
//     this.#address = address
//     this.#iban = iban
//   }
//
//   set lastName(value) {
//     this.#lastName = value
//   }
//
//   set name(value) {
//     this.#name = value
//   }
//
//   set address(value) {
//     this.#address = value
//   }
//
//   set iban(value) {
//     this.#iban = value
//   }
//
//   get lastName() {
//     return this.#lastName
//   }
//
//   get name() {
//     return this.#name
//   }
//
//   get address() {
//     return this.#address
//   }
//
//   get iban() {
//     return this.#iban
//   }
//
//   get info() {
//     return console.log(
//       `name: ${this.#name}, last name: ${this.#lastName}, address: ${
//         this.#address
//       }, IBAN: ${this.#iban}`
//     )
//   }
// }
//
// const clients = [
//   new Buyer('Yakavenka', 'Anton', 'Minsk', '123435345MI'),
//   new Buyer('Ihnatenka', 'Darya', 'Moscow', '123435835MO'),
//   new Buyer('Ospishev', 'Igor', 'Kiev', '123439673KI'),
//   new Buyer('Bortich', 'Dima', 'Minsk', '123431034MI'),
//   new Buyer('Kolesnichenko', 'Natalia', 'Moscow', '123430947MO'),
//   new Buyer('Kolesnichenko', 'Vitaliy', 'Kiev', '123430911KI')
// ]
//
// const sortedClients = clients
//   .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
//   .map((el) => console.log(`${el.lastName} ${el.name}`))
//
// const minskIbanClients = clients
//   .filter((el) => el.iban.endsWith('MI'))
//   .map((el) => el.info)


// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// class Car {
//   constructor(protected brand: string, protected cylinders: number, protected power: number) {
//     this.brand = brand
//     this.cylinders = cylinders
//     this.power = power
//   }
//
//   getCar() {
//     return `${this.brand}: ${this.cylinders} cylinders, power: ${this.power} hp`
//   }
//
// }
//
// class Truck extends Car {
//   constructor(public brand: string, public cylinders: number, public power: number, public bodyLoadCapacity: number) {
//     super(brand, cylinders, power)
//   }
//
//   set newBrand(value: string) {
//     this.brand = value
//   }
//
//   set newCapacity(value: number) {
//     this.bodyLoadCapacity = value
//   }
//
// }
//
// const bmw = new Car('BMW', 4, 410)
// const iveco = new Car('IVECO', 12, 1200)


// just a plug
export default () => {
};