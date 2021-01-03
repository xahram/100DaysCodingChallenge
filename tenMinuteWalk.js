function isValidWalk(walk) {
    //insert brilliant code here
    let ns = 0, ew = 0; 
    if (walk.length === 10) {
        for (const i of walk) {
            if (i === "n") ns += 1
            if (i === "s") ns -= 1
            if (i === "e") ew += 1
            if (i === "w") ew -= 1
        }
        // console.log(ns, ew)
        return ns === 0 && ew === 0
    }
    return false
}

console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))


// function isValidWalk(walk) {
//     //insert brilliant code here
//     let nextIndex = 1;
//     let isValid = true;
//     for (let i = 0; i < walk.length; i++) {
//         if (walk.length !== 10 ||  walk[nextIndex] === walk[i] ) {
//             return isValid = false
//         }
//         nextIndex += 1;

//     }
//     return isValid
// }

// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
// console.log(isValidWalk(['w']))
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))