/*

//2 Мутирование
const nameNew = prompt('Введите ваше имя')
alert(lastName+' '+ nameNew)

//3 Операторы 
let currentYear = 2022
const birthYear = 1993
age = currentYear - birthYear
//console.log(currentYear++) //Cначала выводится число потом происходит инкрементирование поэтому выведет 2022
console.log (++currentYear) //Cначала икрементируется потом выводится
a = 10
b = 5
c = 32
c += a //тоже самое что c = c + a

//4 Типы данных 
const isProgrammer = true
const name1 = 'Slava'
const age1 = 28
let x

console.log(typeof isProgrammer)
console.log(typeof name1)
console.log(typeof age1)
console.log(typeof x)
console.log(typeof null) //возвращает объект, на это не обращать внимание

//5 Приоритет операторов
const fullAge = 28
const birthYear = 1993
const currentYear = 2022
// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge //29 >= 28 => true
console.log(isFullAge)


//6 Условные операторы
const courseStatus = prompt('Введите статус курса') // ready, fail, pending
if (courseStatus==='ready') {
    console.log('Курс готов и его можно проходить')
} else if (courseStatus === 'pending') { // else говорит программе выполнять только если первое не подошло, если просто if то будет выполнять и задействовать ресурсы
    console.log ('Курс находится в процессе разработки')
} else {
    console.log ('Курс не получился')
}
const num1 = 42 //number
const num2 = '42' //string
console.log (num1==num2) // == сравнивает только по значению, === сравнивает и тип данных

const isReady = true
if (isReady) {
    console.log('Всё гоотово!')
} else {
    console.log ('Всё не готово!')
}
// такая же запись в Тернарном выражинии
isReady ? console.log ('Всё готово!') : console.log ('Все не готово!')


//7 Булевая логика
true && true // && - И 
true
true && false
false
false && true
false
false && false
false

true || true // || - ИЛИ
true
true || false
true
false || true
true
false || false
false

!true // !отрицание, можно делать несколько раз !!true = true
false

//8 Функции
function calculateAge(year) {
    return 2022-year
}
//console.log(calculateAge(1993))
function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age>0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Вообще-то это уже будущее!')
    }
}
logInfoAbout('Слава', 1993)

//можно стрелочно объявить функцию, через конст, что бы в дальнейшем не перезаписать
const a = () => {
    console.log('hey there')
}
a() // 'hey there'
a=10 // т.к. функция создана через конст, ее нельзя заменить 

//9 Массивы
const cars = ['Mazda','Mercedes','Ford']
console.log(cars.length)
console.log(cars[1])
cars[0] ='Porsche'
cars[cars.length] = 'Mazda'
console.log(cars)

//10 Циклы
const cars = ['Mazda','Mercedes','Ford','Porsche']
for (let i = 0; i < cars.length; i++) {
    const car = cars[i]
    console.log(car)
}
//более новый вид цикла вывода массива
for (let car of cars) {
    console.log(car)
}

// 11 Объекты 1:43
const person = {
    firstName: 'Viachaslau',
    lastName: 'Nepryakhin',
    year: '1993',
    languages: ['Ru','En','De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife=true //можно менять значение в объекте
person.isProgrammer = true //добавить значение и параметр в объект
console.log(person)
person.greet()

const objectA = {
    name: 'slava',
    lastName: 'Nepryakhin'
}
console.log(objectA.name)
const copyOfobjectA = objectA // копируется только ссылка на объект
copyOfobjectA.name='viachaslau'
console.log(objectA.name)

// Шаблонные строки videTime(11h): 4:35
const firstName = 'Slava'
const city = 'Minsk'
let greeting = `Привет, меня зовут ${firstName} и я живу в городе ${city}`
console.log(greeting)

 // Функциональное выражение с параметром по умолчанию, всегда анонимное поэтому присваеваем имя с помощью переменной
let result=function (value, multiplier=1) { 
return value*multiplier
}  
console.log(result(20))

// В виде стрелочной функции
const MyFn = (value, multiplier=2) => {
    return value * multiplier
}
console.log(MyFn(10)) // второе зачение берется по умолчанию 2
 
//Длинна массива videoTime (11h): 5:54
const myArray = [1,2,3]
console.log(myArray)
myArray[1]='abc' //изменения значения под индексом 1
console.log(myArray)
myArray[myArray.length]='slava' // добавление в конец массива
console.log(myArray, myArray.length)
*/