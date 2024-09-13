// 1. 템플릿 리터널에서 변수를 문자열에 삽입하기 위해 사용되는 문법은 무엇인가요?

// a. ${}




// 2. 아래 코드의 출력 결과는 무엇인가요?

// let name = 'Gyejin';
// console.log(`Hello, ${name}!`);

// a. Hello, Gyejin




// 3. 템플릿 리터널을 사용하여 여러 줄의 문자열을 어떻게 작성할 수 있나요?

// const String =  `이렇게 백틱을
// 사용하면 다음 블록으로 넘어가도 
// 어러줄에 사용이 가능하다`;
// console.log(String);





// 4. 배열 디스트럭처링을 사용하여 변수 first와 second에 [10,20]을 할당하는 코드를 작성하세요.

// const number = [10,20];
// const [first, second] = number;

// console.log(first);
// console.log(second);




// 5.객체 디스트럭처링을 사용하여 객체의 name과 age 속성을 변수로 추출하는 코드를 작성하세요

// const person = { name: 'Gyejin', age: 28 };
// const {name, age} = person;

// console.log(name);
// console.log(age);




// 6. 디스트럭처링 할당에서 기본값을 설정할 수 있나요?

// 예.
// const person = { name: 'Gyejin'};
// const {name, age = 30} = person;

// console.log(name);
// console.log(age);




// 7. 스프레드 연산자를 사용하여 두 배열 [1, 2]와 [3, 4]를 결합하는 코드를 작성.

// const num1 = [1, 2];
// const num2 = [...num1, 3, 4];

// console.log(num2);




// 8. 스프레드 연산자를 사용하면 배열을 갚운 복사할 수 있다.

// 아니요. 깊은 복사가 아니라 얕은 복사라고 합니다




// 9. 아래 코드를 실행했을 때 출력 결과는 무엇?

// a. [1, 2, 3, 4]

// const arr = [1, 2];
// const newArr = [...arr, 3, 4];
// console.log(newArr); 





// 10. 나머지 매개변수를 사용하여 여러개의 숫자를 인자로 받아 그 합을 구하는 sum 함수를 작성

// function sum(a, b, c) {
//   return a + b + c ;
// }
// const number1 = [2,3,4];
// console.log(sum(...number1));




// 11. 함수의 결과는 무엇?

// a. 1과 [2,3,4]
// function printNumbers(first, ...rest) {
//   console.log(first);
//   console.log(rest);
// }

// printNumbers(1, 2, 3, 4);





// 12. 나머지 매개변수는 항상 함수의 마지막 매개변수로 사용되어야한다.

// 참.




// 13.math.js 파일에서 add 함수를 기본 내보내기하고, main.js 파일에서 불러오는
// 코드 작성

// math.js:
// export default function add(a, b) {
//   return a + b;
// }

// main.js:
// import add from './math.js';
// console.log(add(1, 2));




// 14. 여러 함수를 명시적 내보내기로 보내는 예시 코드를 작성.

// math.js
// export const aa = 3;

// export function b(a1, b1) {
//   return a1 + b1 ;
// }

// export function c(c1, d1) {
//   return c1 + d1 ;
// }

// main.js
// import {aa, b, c,} from './math.js';
// console.log(aa, b( 3, 4 ), c( 5, 6 ));




// 15. 아래 코드에서 subtract 함수를 별칭으로 불러오는 코드를 작성

// math.js:
// export function subtract(a, b) {
//   return a - b;
// }

// // main.js:
// import { subtract as newsubtract } from './math.js';
// console.log(newsubtract(5, 3));




// 16. 모듈 시스템에서 동적 import는 무엇을 위한 것인가요?

// b. 파일을 비동기적으로 불러오기 위함













// ES6 기능 관련 Recap (복습) 

// 1. ES6 클래스에서 constructor는 언제 호출 되나요?
// b. 인스턴스를 생성할때




// 2.클래스 Person을 정의하고, 이름을 출력하는 greet 메서드를 작성하세요.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// const gyejin = new Person('홍길동');

// // greet 메서드 호출:
// gyejin.greet()





// 3. ES6 클래스에서 상속을 구현하기 위한 키워드는?

// a. extends





// 4. 코드에서 Promise의 출력 결과는 무엇인가요?

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Success'), 1000);
// });

// promise.then(result => console.log(result));
// b. 1초후 Success를 출력




// 5. Promise의 세가지 상태는?

// 1. 대기 - 초기 상태
// 2. 이행 - 비동기 완료
// 3. 거부 - 비동기 실패




// 6. Promise.all은 언제 사용하나요?

// b. promise를 병렬로 처리 후 완료되면 하나의 결과를 얻을 때





// 7.이터레이터의 기본 메서드는 무엇인가요? (난이도: Extra)

// C. next

// 이터레이터는 순차적으로 접근할수있는 객체
// next는 {value: ... , done: ... } 형태로
// value는 현재값, done는 완료되었는지 나타내는 불리언값





// 8. 제너레이터 함수를 정의하기 위한 키워드는 무엇인가요? (난이도: Extra) 

// a. function*

// 제너레이터는 이터레이터를 쉽게 생성할수있는 특별 함수
// yield 키워드를 사용하여 값을 반환





// 9. 아래 제너레이터 함수의 출력은 무엇인가요? (난이도: Extra)

// a.




// 10. Set은 어떤 특징을 가지고 있나요? (난이도: Extra)

// a. 중복된 값을 허용하지 않는다.

// 중복된 값은 무시함.





// 11. 아래 코드의 출력 결과는 무엇인가요? (난이도: Extra)


// {1, 2, 3} 3은 중복값이라 무시

// const mySet = new Set([1, 2, 3, 3]);

// console.log(mySet);





// 12. Map 객체는 어떤 자료 구조인가요? (난이도: Extra)

// c. 키-값 쌍을 저장하는 자료 구조





// 13. Map의 메서드 중, 특정 키에 해당하는 값을 얻는 메서드는 무엇인가요? (난이도: Extra)

// get()

// set(key, value): 특정 키에 값을 설정
// get(key): 특정 키에 대한 값을 반환 키가 존재하지 않으면 undefined를 반환
// has(key): 특정 키가 Map에 존재하는지 확인
// delete(key): 특정 키와 그에 해당하는 값을 제거
// clear(): Map의 모든 요소를 제거