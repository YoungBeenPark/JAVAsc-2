// 1. 숫자 입력받아 짝수 홀수 출력
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + '은(는) 짝수입니다.')
  }else{
    console.log(number + '은(는) 홀수입니다.')
  }
}checkEvenOdd(10);

// 2. 18세 이상 성인 이하 미성년자
function checkAge(age) {
  if (age < 18) {
    console.log(age + '살은 미성년자입니다.');
  } else {
    console.log(age + '살은 성인입니다.');
  }
}checkAge(18);

// 3.swith문 dydlf 1~7 입력 요일의 이름을 출력
let calender = 4 ;
switch (calender) {
  
  case 1 : 
    console.log('월요일입니다.');
    break;
  
  case 2: 
    console.log('화요일입니다.');
    break;

  case 3: 
    console.log('수요일입니다.');
    break;

  case 4: 
    console.log('목요일입니다.');
    break;

  case 5: 
    console.log('금요일입니다.');
    break;

  case 6: 
    console.log('토요일입니다.');
    break;
    
  case 7: 
    console.log('일요일입니다.');
    break;
}

// 4. 1부터 100까지의 숫자 중에서 짝수만 출력하는 for 반복문을 작성하세요.
for (let i =1 ; i<=100; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 5.while 문을 사용하여 5부터 15까지의 숫자를 출력하는 프로그램을 작성하세요.
// let i = 5 ;
// while ( i<=15 ){
//   console.log(i)
//     i++
// }

// 6. do-while 문을 사용하여 사용자가 입력한 숫자가 10이 될 
// 때까지 숫자를 계속 입력받고, 입력된 숫자를 출력하는 프로그램을 작성하세요.
let i = 0 ;
do {
  console.log(i);
    i++
} while(i<=10);

// 7. 두 개의 숫자를 더하는 함수 addNumbers를 선언하고,
//  해당 함수를 호출하여 결과를 출력하세요.
function addNumbers(a, b) {
  return a+b;
}
console.log(addNumbers(2,4))

// 8. 세 개의 숫자를 곱한 결과를 반환하는 함수 multiplyNumbers를 
// 선언하고 호출하여 결과를 출력하세요.
function multiplyNumbers(a, b, c) {
	return a*b*c;
}
console.log(multiplyNumbers(2,6,9))


// 9. 이름을 인자로 받아서 "안녕하세요, 
// [이름]님!"을 출력하는 함수 greet를 선언하고 호출하세요.
function great(name) {
	console.log(name + '님! 어서오세요. 환영합니다!');
}
great('아무개');


// 10. 두 숫자의 차를 구하는 함수 표현식을 작성하고 이를 호출하여 결과를 출력하세요.
// 뺄셈
const subtract = function(a, b) {
	return a - b ;
}
console.log(subtract(2,3))


// 11.세 개의 숫자를 더한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하여 결과를 출력하세요.
const sum = function(a, b, c) {
	return a + b + c
}
const sum1 = sum(2,3,4)
console.log(sum1)


// 12. 두 숫자를 더한 값을 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
// 화살표
const add = (a, b) => a + b ;
const add1 = add(12,23);
console.log(add1);


// 13. 숫자를 제곱하여 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
const square = (n) =>  n * n
console.log(square(100));


// 14. 배열을 입력받아 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수를 작성하세요.
//  (map 메소드를 사용하세요) ----- 콜백 함수 이용
const doubleArray = (arr) => arr.map(value => value * 2)
console.log(doubleArray([2,4,5,6,7]))

// 15. 나이를 인자로 받아 "성인" 또는 "미성년자"를 반환하는 화살표 함수를 작성하세요.
let you = (age1) => age1 >= 18 ? '성인입니다' : '미성년자입니다';
console.log(you(20))


// 16.두 개의 숫자를 입력받아, 큰 숫자를 출력하는 함수를 작성하세요.
function findMax(a, b) {
	if (a > b) {
    console.log('A가 B보다 큽니다.');
  } else{
    console.log('B가 A보다 큽니다.');
  }
}
findMax(12,17);


// 17. 학생의 점수를 입력받아 90점 이상은 'A', 80점 이상은 'B', 70점 이상은
// 'C', 그 이하는 'F'를 출력하는 프로그램을 작성하세요.

let score = 20;

if (score >= 90) {

    console.log('A 입니다.');
}

else if (score >= 80) {
    console.log('B 입니다.');
}

else if (score >= 70) {
    console.log('C 입니다.');
}

else if (score >= 60) {
    console.log('D 입니다.');
} 

else {
  console.log('F 입니다.');
}

// 18. switch문을 사용하여 사용자가 입력한 달(month)에 맞는 계절을 출력하는 프로그램을 작성하세요. (예시: 3 ~ 5월은 봄, 6 ~ 8월은 여름, 9 ~ 11월은 가을, 12 ~ 2월은 겨울)

function getSeason(month) {
switch (month) {
  case 3:
  case 4:
  case 5:
    console.log('봄 입니다.');
  break;

  case 6:
  case 7:
  case 8: 
    console.log('여름 입니다.');
  break;

  case 9:
  case 10:
  case 11:
    console.log('가을 입니다.');
  break;

  case 12:
  case 1:
  case 2:
    console.log('겨울 입니다.');
  break;
  }
}
getSeason(4);

// 19. for문을 사용하여 1부터 10까지의 숫자의 합을 구하는 프로그램을 작성하세요.
let sum2 = 0 ;
for (let i = 1; i<=10; i++){
  sum2 =+ i ;
}
console.log(sum2);

// 20. while문을 사용하여 1부터 20까지의 숫자 중 3의 배수를 출력하는 프로그램을 작성하세요.
let e = 1 ;
while (e<=20){
  if(e % 3 === 0){
  console.log(e)
  }
  e++;
}

// 21.do-while문을 사용하여 0부터 100까지의 숫자 중 10의 배수를 출력하는 프로그램을 작성하세요.
let r = 0 ;
  do{
    if(r % 10 === 0) {
      console.log(r)
    } r++;
  } while (r<=100);


  // 22.세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수를 선언하고 호출하세요.
  function findMaxOfThree(a, b, c) {
    if (a>b){
      console.log('a가 큽니다.')
    } else if(b>c){
      console.log('b가 큽니다.')
    } else {
      console.log('c가 큽니다.')
    }
  }
  findMaxOfThree(3,5,4)

  // 23. 두 문자열을 입력받아 두 문자열이 동일하면 "동일함"을,
  //  그렇지 않으면 "동일하지 않음"을 출력하는 함수를 작성하세요.
  function compareStrings(str1, str2) {
    if (str1 === str2){
      console.log('동일함')
    } else {
      console.log('동일하지 않음')
    }
  }compareStrings('안녕하세', '안녕하세요')
  
// 24. 배열을 입력받아 배열에 있는 숫자들의 평균을 계산하는 함수를 작성하세요.
function calculateAverage(numbers) {
 let value1 = 0;
  for (let i = 0; i < numbers.length; i++) {
    value1 += numbers[i];
  } 
  return value1 / numbers.length ;
}
console.log(calculateAverage([12,23,34,56,78]));

// 25.배열의 모든 요소를 제곱한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하세요.
const squareArray = function(arr) {
	return arr.map((element)=> element ** 2) ;
};
console.log(squareArray([1,2,5,3,7]));

// 26.두 문자열을 합친 후, 그 길이를 반환하는 함수 표현식을 작성하세요. 
// (Hint: String.prototype.lengtn)

const combineAndLength = function(str1, str2) {
	return (str1 + str2).length;
};
console.log(combineAndLength('dasd',"asfasf"))


// 27.배열에서 가장 큰 숫자를 찾는 함수 표현식을 작성하세요.
const findMaxInArray = function(arr) {
	return Math.max(...arr);
};
console.log(findMaxInArray([12,235346,7568568,345345]))


// 28.두 문자열을 입력받아 그 길이를 비교하고, 더 긴 문자열을 반환하는 화살표 함수를 작성하세요.
const getLongerString = (str1, str2) => {
	if (str1>str2){
    return str1
  }else {
    return str2
  }
};
console.log(getLongerString('1번입니다', '2번입니다'))

// 29. 숫자로 이루어진 배열을 입력받아, 
// 배열의 모든 요소에 5를 더한 새로운 배열을 반환하는 화살표 함수를 작성하세요.
const addFiveToArray = (arr) => {
  return arr.map((element) => element + 5)
};
console.log(addFiveToArray([2,3,4,5,8]))



// // 30.세 개의 숫자를 입력받아, 세 숫자의 합이 100 이상이면 "합격",
// // 그렇지 않으면 "불합격"을 반환하는 화살표 함수를 작성하세요.
const checkSum = (a, b, c) => {
const valur2= a + b + c ;
  if (valur2>=100){
    console.log("합격입니다")
  }else {
    console.log('불합격입니다.')
  }
};
checkSum(33,33,34)