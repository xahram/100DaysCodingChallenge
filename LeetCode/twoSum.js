
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let k = 1; k < nums.length; k++) {

//             // if ((nums[i] + nums[k]) === target && k !== (nums.length - 1)) {
//             if ((nums[i] + nums[k]) === target && k !== i) {
//                 return [i, k]
//             }
//         }
//     }
    
// };



// this is brilliant.. to anyone whos trying to understand this in plain english and basic math:

// we are looking for the two numbers that satisfy the condition (x + y = target)

// he iterates through the array knowing that for each number, there is only one complementary number that could possibly satisfy the return condition (x + y = target). if we do some quick math and rearrange this equation, this means that target - y = x. we already know target, and each time we iterate we get a value of y. therefore every time we iterate we calculate what the complementary x must be for that given y, so we save the value of complementary x as the key and we save the index of y. as we pass through the loop, we simultaneously build up a database of the potential x values that will give us our answer.

// therefore, if the current number is a key in the database, we return the value of the y index we stored earlier, along with the current index, and we have our answer..

// tldr: he's a badass

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
        console.log(comp)
    }
};
const nums = [2,5,5,11,15,10,9];
const target = 19;

console.log(twoSum(nums, target));