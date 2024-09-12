// // 1. JavaScript에서 클래스를 정의하는 키워드는 무엇인가요?
// // class.


// // 2. constructor는 클래스에서 어떤 역할을 하나요?
// // 생성자로도 불리며 객체가 생성될때 초기화 해주는 함수.


// // 3. 아래 코드에서 alice 객체의 greet 메서드를 호출하면 출력될 결과는 무엇인가요?
// // Hello, my name is Alice 가 출력됩니다.
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const alice = new Person('Alice');

// alice.greet();


// // 4. JavaScript에서 함수가 인수로 전달되는 방식을 무엇이라고 하나요?
// // callback.


// // 5.아래 코드는 콜백 함수의 예시입니다. greet 함수에서 callback 함수를 호출하는 부분을 채워 넣으세요.
// function greet(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback();
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye);


// // 6.다음 코드에서 result 변수의 값은 무엇인가요?
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(num => num * 2);
// [2,4,6,8,10]


// // 7.클로저는 함수와 그 함수가 선언된 무엇의 조합인가요?
// // 어휘적 환경의 조합, 변수 scope와 관련된 개념, 작성된 위치에 따라 변수 함수가 접근성을 결정


// // 8.어떤 결과가 나오는지 설명하세요.
// // 첫번째 1
// // 두번째 2
// function outer() {
//   let count = 0;
  
//   return function inner() {
//     count++;
    
//     console.log(count);
//   };
// }

// const counter = outer();

// counter();
// counter();


// // 9.고차 함수란 무엇을 인수로 받거나 반환하는 함수인가요?
// // 함수를 인수(전달 값)로 받거나 반환하는 함수


// // 10. JavaScript에서 비동기 작업을 처리하기 위해 주로 사용하는 방법은 무엇인가요?
// // 비동기방식 - 결과를 기다리지않고 즉시 다음코드 실행하는 방식
// // 동기방식 - 흐름에 따라 작업이 완료되면 다음작업 실행하는 방식
// // callback 함수


// // 11.객체에서 메서드를 공유하여 메모리 효율성을 높이는 데 사용하는 JavaScript의 개념은 무엇인가요?
// // colseur


// // 12. 프로토타입 체인을 통해 JavaScript 객체가 다른 객체의 속성이나 메서드를 무엇하나요?
// // 프로토타입 상속?


// // 13. 다음 코드에서 speak 메서드를 재정의(오버라이딩)하여 Dog 클래스가 Rex barks를 출력하도록 수정하세요.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak(){
//   console.log(`${this.name} barks`)}
// }

// const dog = new Dog('Rex');
// dog.speak(); // Rex barks


// // 14. 다음 코드를 고차 함수를 사용해 중복을 줄여보세요.
// function repeat(num, action) {
//   for(let i = 0; i < num; i++)
//     console.log(action);
// }
// function twice(){
//   repeat(2, 'Repeated twice')
// }
// function thrice(){
//   repeat(3, 'Repeated thrice')
// }
// twice();
// thrice();


// // 15.클로저의 특성상 내부 함수에서 외부 함수의 변수를 참조할 수 있는데,
// //  이때 외부 함수가 종료된 후에도 그 변수가 사라지지 않는 이유는 무엇인가요?
// // 함수가 정의 되면 어휘적 환경을 기억하는 특징떄문


// // 17.아래 Car 생성자 함수에 drive 메서드를 추가해, 각 인스턴스가 Driving [브랜드]를 출력하도록 해보세요.
// function Car(brand) {
//   this.brand = brand;


//   this.drive = function (){
//   console.log(`Dirving ${this.brand}`)
//   }
// }
// const car1 = new Car('Tesla');

// car1.drive();

// // 18.중: 아래 코드에서 add1 함수와 multiply2 함수를 조합해 
// // add1ThenMultiply2 함수를 정의하세요.
// const add1 = x => x + 1;
// const multiplay2 = x => x * 2;

// const add1ThenMultiply2 = x => multiplay2(add1(x));

// console.log(add1ThenMultiply2(5)); // 12

// 19.중: 생성자 함수에서 부모 객체의 생성자를 호출하여,
// 자식 객체가 부모 객체의 속성과 메서드를 물려받게 하는 방법을 설명하세요.
// function boo(name) {
//   this.name = name;
// }

// boo.prototype.boo2 = function() {
//   console.log(`HI, ${this.name} 안녕 과제중이야`);
// }

// function boo3(name, age) {
//   boo.call(this, name);
//   this.age = age;
// }

// boo3.prototype = Object.create(boo.prototype);
// boo3.prototype.constructor = boo3;

// boo3.prototype.boo3Method = function() {
//   console.log(`나는 ${this.age}살입니다.`);
// }

// const student = new boo3('Alice', 20);
// student.boo2();
// student.boo3Method();

// // 20.클로저를 사용하여, 외부에서 직접 접근할 수 없는 변수를
// // 내부에서 조작할 수 있는 카운터 함수를 작성하세요.
// function newcounter () {
//   let count = 0;

//   return {
//     onecounter: function(){
//       count++;
//       console.log(`${count}`);
//     },
//     twocounter: function(){
//       count--;
//       console.log(`${count}`);
//     },
//     outcount: function(){
//       return
//     }
//   };
// } const counter1 = newcounter();
// counter1.onecounter();
// counter1.twocounter();


// // 21.Object.create()를 사용하여, Person 객체를 프로토타입으로 갖는 
// // Student 객체를 생성하고, Student 객체에만 존재하는 study 메서드를 추가하세요.
// const Person1 = {
//   greet: function() {
//     console.log('Hello');
//   }
// };

// const Student = Object.create(Person1);

// Student.study = function() {
//   console.log('Studying');
// };

// Student.greet();  // Hello
// Student.study();  // Studying


// // 22. 아래 코드에서 클로저를 활용해 bankAccount 객체의 
// // deposit, withdraw, getBalance 메서드를 구현하세요.
// // 각 메서드는 외부에서 접근할 수 없는 balance 변수를 조작해야 합니다.
// function bankAccount(initialBalance) {
//   let balance = initialBalance ;

//   return {
//     deposit: function(amount) {
//       balance += amount 
//         console.log(`잔액: ${balance}원`)
//     },
//     withdraw:function(amount){
//       if(amount <= balance) {
//         balance -= amount;
//         console.log(`잔액: ${balance}원`)
//       } else {
//         console.log('잔액이 부족합니다.')
//       }
//     },
//     getBalance:function() {
//       return balance;
//     }
//   };
// }
// const account = bankAccount(1000);

// account.deposit(500); // 잔액: 1500

// account.withdraw(200); // 잔액: 1300

// console.log(account.getBalance()); // 1300


// // 23.다음 코드에서 setTimeout 함수의 비동기 특성을 고려해,
// // 콜백 함수에서 정확한 순서로 출력되도록 코드를 수정하세요. (Start → Middle → End)
// console.log('Start');

// console.log('Middle');

// setTimeout(() => {
//   console.log('End');
// }, 0);





// // 24.Person 클래스에서 정적 메서드를 사용해, isAdult라는 메서드를 추가하세요.
// //  이 메서드는 나이가 18세 이상이면 true를 반환해야 합니다.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static isAdult(age) { 
//     if (age >= 18){
//       return console.log(true);
//     }else{
//       return console.log(false);
//     }
//   }
// }

// const adult = Person.isAdult(20);  // true
// const child = Person.isAdult(15);  // false


// 25.콜백 지옥 문제를 해결하기 위해 Promise를 사용하여 비동기 작업을 
// 처리하는 코드를 작성하세요.
// function fetchData(callback) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//      const data = 'Data fetched';
//      resolve(data);
//     }, 1000);
//   });
// }

// fetchData().then(data => console.log(data));



// 26. 클래스 상속을 활용하여 Employee 클래스를 만들고,
// Person 클래스의 greet 메서드를 호출한 후 Job title: [직업명]을 출력하도록 수정하세요.
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I am ${this.name}.`);
//   }
// }

// class Employee extends Person {
//   constructor(name, jobTitle) {
//     super(name);
//     this.jobTitle = jobTitle;
//   }

//   greet (){
//     console.log(`I'm ${this.name} I'm job ${this.jobTitle}`);
//   };
// }

// const employee = new Employee('Alice', 'Engineer');

// employee.greet();


// // 27.다음 코드에서 클로저를 사용하여 increment 함수가 호출될 때마다 step만큼 증가하는 카운터를 구현하세요.
// function createCounter(step) {
//   let count = 0;

//   return function increment() {
//     count += step ;
//     console.log(count)
//   };
// }

// const counter2 = createCounter(2);

// counter2(); // 2
// counter2(); // 4

// 28.고차 함수 reduce를 사용하여 배열 [1, 2, 3, 4, 5]의 요소를 모두 더하는 코드를 작성하세요.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((a, b) => a + b, 0);
// console.log(sum); // 15  