 function printAnagrams(arr) {
 
    const map = {};
   
    for (let i = 0; i < arr.length; i++) {
   
      let word = arr[i];
      let letters = word.split("");
      letters.sort();

      let newWord = letters.join("");
  
      if (map[newWord]) {
   
        map[newWord].push(word);
   
      } else {
        const words = [];
        words.push(word);
        map[newWord] = words;
      }
    }
    for (const s in map) {
      const values = map[s];
      if (values.length >= 1) {
        console.log(values)
      }
    }
  }

printAnagrams(['cook','save','taste','aves','vase','state','map'])