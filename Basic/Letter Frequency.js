function letterFrequency(string){
  const freq=  {};
string = string.replace(/\s/g, "");
for(let i =0; i<string.length;i++){
  if(freq[string.charAt(i)])
  freq[string.charAt(i)] +=1;
  else 
      freq[string.charAt(i)] = 1;
  }
  
return freq;
  
}

const string = prompt('Give me a String:-');
console.log(letterFrequency(string));
