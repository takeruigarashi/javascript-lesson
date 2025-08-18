//Q1
let nickname = '五十嵐';
let age = 28;
let greet ='私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';

console.log(greet);

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go',];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateText);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;

let averageAge = totalAge / playerList.length;

console.log(averageAge);

//Q6
function sayHello(){
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

//Q7
let newUser = Object.assign({}, user,{
  birthday: '2000-09-27',
  sayHello: function() {
    console.log('Hello!');
  }
});

console.log(newUser.age);
console.log(newUser.birthday);
newUser.sayHello();

//Q8
let calc = {};

calc.add = function(x, y){
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(20, 4);

//Q9
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log('5 を 3 で割った余りは ' + result + ' です。');

//Q10 
//変数Xはfoo関数内で定義されており、スコープの外からは参照できないため、エラーになる。

//応用問題

//Q1
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Q2
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('五十嵐', addIntro);

//Q3
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

//Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let item = mixed[i];

  if (typeof item === 'number') {
    console.log('number');
  } else if (typeof item === 'number' && item % 2 !== 0) {
    console.log('odd');
  } else if (typeof item === 'number' && item % 2 === 0) {
    console.log('even');
  } else {
    console.log('not number');
  }
}
