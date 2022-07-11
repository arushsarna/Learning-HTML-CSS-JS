function wordFrequency(string){
  const freq=  {};
  const words = string.split(" ");
for(let i =0; i<words.length;i++){
  if(freq[words[i]])
  freq[words[i]] +=1;
  else 
      freq[words[i]] = 1;
  }
  
return freq;
  
}

const string = prompt('Give me a String:-');
console.log(wordFrequency(string));
