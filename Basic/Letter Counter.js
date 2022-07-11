function letterCounter(string){
string.trim();
const newstring = string.replace(/\s/g, "");
  console.log(newstring);
return newstring.length;
  
}

const string = prompt("Give me a String :-");
alert(letterCounter(string));
