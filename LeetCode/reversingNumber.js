/**
 * @param {number} x
 * @return {number}
 */

// 2^31 in binary representation is a 1 followed by 31 zeroes (just like 10^6 in decimal is a 1 followed by 6 zeroes). Each group of 4 binary digits (starting from the right) is a hexadecimal digit, so 2^31 is 0x80000000. Then subtract one...
// https://stackoverflow.com/questions/9643626/does-javascript-support-64-bit-integers
// https://babbage.cs.qc.cuny.edu/courses/cs341/Powers_of_Two.html
// https://www.danvk.org/hex2dec.html
// https://stackoverflow.com/questions/9643626/does-javascript-support-64-bit-integers
// https://stackoverflow.com/questions/47600096/what-is-32-bit-integer-in-javascript
// https://stackoverflow.com/questions/46625819/what-does-0x7fffffff-mean-in-inttime-time1000-0-0x7fffffff



var reverse = function (x) {

    let y = Math.abs(x).toString()
    let b = ""

    for (let i = y.length - 1; i >= 0; i--) {
        // console.log(y[i])
        b += y[i]
    }

    // console.log(z)
    // b = z ? z + b : b
    if (parseInt(b) > 0x7FFFFFFF || parseInt(b) < ~0x7FFFFFFF) {
        return 0;
    }
    return x < 0 ? -parseInt(b) : parseInt(b)

};

console.log(reverse(-123))
console.log(reverse(1563847412))







// Alternative Solution

// var reverse = function(x) {
//     let ans = parseInt(x.toString().split('').reverse().join('').toString());
  
//     if (x < 0) { ans *= -1; }
  
//     if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
//     return ans;
//   };
  
//   console.log("Reverse of 123: " + reverse(123));
//   console.log("Reverse of -123: " + reverse(-123));