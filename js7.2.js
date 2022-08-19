// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

let Str='abcadeecfb';
function count_alphabets(Str)
{
 
  let firstMap = new Map();
  console.log(firstMap);
 
  Str.split('').forEach(element => {
     
        if(firstMap.has(element))
        {
           console.log( firstMap.set(element, firstMap.get(element)+1));
        }
        else
           console.log( firstMap.set(element, 1));
  });

  console.log(firstMap);
}
count_alphabets(Str);