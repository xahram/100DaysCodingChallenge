var lengthOfLongestSubstring = function (s) {
    const mapping = []

    for (const i of s) {
        if (mapping.length && mapping[mapping.length - 1] === i && mapping.includes(i)) {
            mapping.splice(0, mapping.length)
        }
        if (!mapping.includes(i))
            mapping.push(i)
    }
    return mapping
}


console.log(lengthOfLongestSubstring("abcabcbb"))



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
