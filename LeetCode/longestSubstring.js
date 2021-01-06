var lengthOfLongestSubstring = function (s) {
    if (!s.length)
        return 0
    let string = '';
    let substr = ""
    let i = 0
    const mapping = {}
    for (let j = 0; j < s.length; j++) {
        if (s[j] in mapping) {
            i = Math.max(mapping[s[j]], i)
            // substr = s.slice(i,j+1)
            
        }
        // string += s[j]
        // ans = Math.max(ans,j-i+1)
        mapping[s[j]] = j + 1;
        substr += s[j]
    }
    // console.log(string)
    return substr
}
console.log(lengthOfLongestSubstring("abcabcbb"))
// var lengthOfLongestSubstring = function (s) {
//     if (!s.length)
//         return 0
//     let nonRepeat = []
//     let mapping = {};
//     let answer = 0;
//     let i = 0;
//     for (let j = 0; j < s.length; j++) {
//         if (s[j] in mapping) {
//             i = mapping[s[j]] + 1
//             // i = 2 b=1
//         }
//         mapping[s[j]] = j
//         // j = 2
//         answer = Math.max(answer, j-i+1)
//         // answer = 1
//     }
//     return answer
//     // return mapping
// }




// for (let i = 0; i < s.length; i++) {
//     if (mapping.includes(s[i])) {
//         if (mapping.length > s.length - (i + 1)) {
//             return mapping
//         }
//         mapping.splice(0, mapping.indexOf(s[i]) + 1)
//     }
//     mapping.push(s[i])
// }

// for (const i of s) {
//     if (mapping.includes(i)) {
//         mapping.splice(0, mapping.length)
//     }
//     mapping.push(i)

// if (mapping.length && mapping[mapping.length - 1] === i && mapping.includes(i)) {
//     mapping = []
// }
// if (!mapping.includes(i))
//     mapping.push(i)

// if (!mapping.includes(i) || mapping[mapping.length-1] !== i) {
        //     mapping.push(i)
        // }

  // mapping[i] = mapping[i] ? mapping[i] + 1 : 1
    //Wrong way of Making ternary operation
    // !mapping[i] ? mapping[i] = 0 : mapping[i] = mapping[i] + 1



// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
