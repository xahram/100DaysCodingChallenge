function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let consonant = ""

    for (let i = 0; i < str.length; i++) {
        consonant = !vowels.includes(str[i]) ? consonant += str[i] : consonant
    }
    // const remVowels = str.filter((s)=>{
    //   return !vowels.includes(s)
    // })
    return consonant;
}
console.log(disemvowel("This website is for losers LOL!"))