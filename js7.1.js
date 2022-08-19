// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

let str='jgvhbisbbbhsyrrrrhbbr';
console.log(str);
let withoutDuplicate=new Set();
for(let i=0;i<str.length;i++){
    withoutDuplicate.add(str.charAt(i));
}
console.log(withoutDuplicate);