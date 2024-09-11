// 객체 리터럴을 사용하여 이름이 "홍길동", 나이가 25인 person 객체를 만들어보세요.
const person = {
  name : '홍길동',
  age : 25
};
console.log(`이름은 ${person.name}이고 나이는 ${person.age}입니다.`)


// 2.아래 car 객체의 brand 속성에 접근하여 콘솔에 출력해보세요.
const car = { brand: "현대", model: "Santa Fe", year: 2013 };
console.log(car.brand, car.model, car.year);


// 3.person 객체가 sayHello 메소드를 가지고 있습니다.
// 이를 호출하여 콘솔에 "Hello, I am Alice."를 출력하세요.
const person1 = {
  name: "Alice",
  sayHello: function() {
    console.log(`"Hello, I am  ${this.name} "`);
  }
};
person1.sayHello();


// 4. person 객체에 greet 메소드를 추가하여 "Hi, I'm [name]"을 출력하도록 만들어보세요.
const person2 = { 
  name: "Bob",
  great: function(){
    console.log(`"Hi, I'm ${person2.name}"`)

  }
};
person2.great();


// 5.Person이라는 생성자 함수를 사용하여 이름과 나이를 속성으로 가진 객체를 만들고,
// 해당 객체로 이름이 "John", 나이가 30인 객체를 생성하세요.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function(){
    console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다`)};
}
const Person1 = new Person('John',30);
Person1.greet();


// 6.이름과 나이를 속성으로 가진 객체 배열에서 나이가 18 이상인 사람만 필터링하세요.
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Paul", age: 15 },
  { name: "Mark", age: 25 }
];
const name1 = people.filter(function(people){
  return people.age >= 18 ;
});
console.log(name1)


// 7."Apple", "Banana", "Orange"를 요소로 가진 배열을 만들어보세요.
const fruits = ['Apple', 'fruits', 'Orange']


// 8.아래 배열의 두 번째 요소를 출력해보세요.
const fruits1 = ["Apple", "Banana", "Orange"];
console.log(fruits1[1])


// 9.numbers 배열에 숫자 5를 추가해보세요.
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);


// 10.colors 배열에서 마지막 요소를 제거하세요.
const colors = ["Red", "Green", "Blue"];
colors.pop()
console.log(colors)


// 11. days 배열의 첫 번째 요소를 제거하세요.
const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
console.log(days);


// 12.names 배열의 맨 앞에 "Alice"를 추가하세요.
const names = ["Bob", "Charlie"];
names.unshift("Alice");
console.log(names);


// 13.numbers 배열의 각 요소를 forEach를 사용하여 출력하세요.
const numbers1 = [1, 2, 3];
numbers1.forEach(function(bers) {
  console.log(bers);
})


// 14.numbers 배열의 각 요소를 2배로 변환한 새로운 배열을 만드세요.
const number2 = [2,3,4,5]
const double = number2.map(function(number2){
  return number2 * 2;
});
console.log(double)

// 15.ages 배열에서 18세 이상인 숫자만 필터링하세요.
const ages = [12, 18, 20, 14, 25];
const age1 = ages.filter(function(age){
  return age >= 18 ;
});
console.log(age1)


// 16.prices 배열의 합계를 구하세요.
const prices = [10, 20, 30, 40];
const sum = prices.reduce(function(all, num){
  return all + num ;
}, 0);
console.log(sum);

// 17. 아래 배열에 "Banana"가 포함되어 있는지 확인하세요.
const fruits2 = ["Apple", "Orange", "Grapes"];
const haveBanana = fruits2.includes('Banana');
// console.log(haveBanana)
if (fruits2) {
  console.log('재고를 보충하세요')
}else{
  console.log('재고가 남아있습니다.')
}

// 18. numbers 배열을 오름차순으로 정렬하세요.
const numbers2 = [5, 2, 8, 1, 3];
numbers2.sort(function(a, b){
  return a - b ;
});
console.log(numbers2)


// 19.letters 배열을 뒤집어보세요.
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);


// 20.animals 배열에서 첫 번째와 두 번째 요소를 잘라내어 새로운 배열을 만드세요.
const animals = ["Cat", "Dog", "Elephant", "Lion"];
const newanimals = animals.slice( -2 );
console.log(newanimals);


// 21.fruits 배열의 두 번째 위치에 "Strawberry"를 추가하세요.
const fruits3 = ["Apple", "Banana", "Orange"];
fruits3.splice(1,0,"Strawberry");
console.log(fruits3)


// 22.arr1과 arr2 배열을 합쳐 새로운 배열을 만드세요.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newarr = arr1.concat(arr2);
console.log(newarr);


// 23.products 배열에서 가격이 100 이상인 첫 번째 상품을 찾으세요.
const products = [
  { name: "Shirt", price: 50 },
  { name: "Shoes", price: 120 },
  { name: "Hat", price: 80 }
];
const newproducts = products.find(function(p){
  return p.price > 100 ;
});
console.log(newproducts);

// 24.numbers 배열의 모든 요소가 짝수인지 확인하세요.
const numbers3 = [2, 4, 6, 8];
const newnumbers3 = numbers3.every(function(num){
  if (num % 2 === 0) {
    console.log(num + '는 짝수입니다.');
  }else {
    console.log('는 짝수가 아닙니다.')
  }
});


// 25.ages 배열의 요소 중 하나라도 21세 이상인지 확인하세요.
const ages1 = [16, 20, 18, 19];
const newages = ages1.some(function(a){
  return a > 21 ;
});
console.log(newages);


// 26.아래 배열에 중복된 값이 있는지 확인하는 코드를 작성하세요. -17번
// includes 이용
// Set메소드를 이용하는 방법도 알아볼것
const numbers4 = [1, 2, 3, 4, 2, 5];
function newnumbers4(num) {
  for (let i = 0; i <num.length; i++) {
    if (num.includes(num[i], i + 1)) {
      console.log('중복이 있습니다.');
      return 
    } 
  }console.log('즁복이 없습니다.'); 
}
newnumbers4(numbers4);


// 27. 아래 배열을 나이(age)를 기준으로 오름차순 정렬하세요.
const people1 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 35 }
];
//방법 1.
people1.sort((a, b) => a.age - b.age);
console.log(people1)
// 방법 2.
// const newpeople1 = people1.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(newpeople1)


// 28.ages 배열에서 21세 이상의 요소의 인덱스를 찾으세요.
const ages2 = [16, 18, 22, 20];

const newages2 = ages2.findIndex(function(a){
  return a >= 21 ;
});
console.log(newages2);


// 29.words 배열을 쉼표로 구분된 문자열로 변환하세요.
const words = ["Hello", "World", "JavaScript"];
const newwords = words.join(',');
console.log(words);


// 30.중첩된 배열을 평탄화하여 하나의 배열로 만드세요.
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const newnestedArry = nestedArray.flat(2);
console.log(newnestedArry);