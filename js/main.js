//function1
function reverseString(message){
  // wirte your code here
  var arr = message.split('');
  var newStr = arr.reverse().join('');
  return newStr;
}
reverseString('hello'); // should return 'olleh'


//function2
function palindrome(message){
  // wirte your code here
  var i=0;
  var j = message.length-1;

  while(i<=j){
    if (message.charAt(i)!=message.charAt(j)){
      return false;
      break;
    } else{
      i++;
      j--;
    }
  }
  return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true


//function3
function alphabetSort(message){
  // wirte your code here
  var arr = message.split('');
  arr.sort();
  return arr.join('');
}
alphabetSort('hellofjdakkoriqjwkd'); // should return 'ehllo'


//function4
function countWords(message){
  var arr = message.split(' ');
  return arr.length;
}
countWords('Good morning, I love JavaScript.');
