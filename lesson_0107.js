function fizzBuzz() {
  for(let i=1;i <= 30; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz'); 
    }  else if(i % 3 === 0){
      console.log('Fizz');
    } else if(i % 5 === 0){
      console.log('Buzz');
    } else {
      console.log(i)
    }
  }
}

fizzBuzz();

const numbers = [2, 4,6];

function doubleArrayValues(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] *= 2
  }
  return arr;
}

const doubleNumbers = doubleArrayValues(numbers);

console.log(doubleNumbers);


function reverseString(str) {
  return str.split('').reverse().join('');
}

// テスト用例
const originalString = 'Hello, world';
const reversed = reverseString(originalString);
console.log(reversed); // 出力される文字列は '!dlrow ,olleH' になります。