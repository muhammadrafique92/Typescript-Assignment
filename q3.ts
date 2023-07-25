let myname = "mr Muhammad Rafique khan"

console.log(myname.toUpperCase());

console.log(myname.toLowerCase());

let words = myname.split(" ");

for (let index = 0; index < words.length; index++) {
    let word = words[index];
    words[index] = word.charAt(0).toUpperCase()+word.slice(1); 
}

let result=words.join(" ")

console.log(result);