//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let current = new ListNode();
    const result = current;
    let carry = 0
    while (l1 || l2) {
        let sum = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        current.next = new ListNode((sum + carry) % 10)
        carry = Math.floor((sum + carry) / 10) >= 1 ? 1 : 0
        current = current.next
    }
    if (carry) {
        current.next = new ListNode(carry)
    }
    return result.next
};
const nf7 = new ListNode(9)
const nf6 = new ListNode(9, nf7)
const nf5 = new ListNode(9, nf6)
const nf4 = new ListNode(9, nf5)
const nf3 = new ListNode(9, nf4)
const nf2 = new ListNode(9, nf3)
const nf1 = new ListNode(9, nf2)

const ns4 = new ListNode(9)
const ns3 = new ListNode(9, ns4)
const ns2 = new ListNode(9, ns3)
const ns1 = new ListNode(9, ns2)

console.log(JSON.stringify(addTwoNumbers(nf1, ns1)))



//  let head = l1;
//     let head2 = l2;
//     let carry = 0;
//     let newNode = new ListNode();
//     let result = newNode
//     while (head || head2 ) {
//         if (Math.floor((head.val + head2.val) / 10) > 0) {
//             console.log("1st");
//             newNode.next = new ListNode()
//             newNode.next.val = (head.val + head2.val) % 10
//             carry = Math.floor((head.val + head2.val) / 10)
//             newNode = newNode.next
//         } else {
//             console.log("2nd", carry);
//             newNode.next = new ListNode()
//             newNode.next.val = carry === 0 ? (head.val + head2.val) : (head.val + head2.val) + carry
//             carry = 0;
//             newNode = newNode.next
//             // newNode.next = null;
//         }

//         head = head.next
//         head2 = head2.next
//     }
//     return result.next

// [9,9,9,9,9,9,9]
// [9,9,9,9]














  // const nextNodeF = l1;
    // const nextNodeS = l2;
    // let newLinkedList = null
    // let remainder = null;
    // let head = null;
    // while (nextNodeF !== null && nextNodeS !== null) {
    //     const newNode = new ListNode()
    //     if ((nextNodeF.val + nextNodeS.val) % 10 >= 0) {
    //         newNode.val = (nextNodeF.val + nextNodeS.val) % 10
    //         newNode.next = null;
    //         remainder = 1
    //         newLinkedList = newNode
    //     } else {
    //         newNode.val = (nextNodeF.val + nextNodeS.val) + ((remainder) ? remainder : 0)
    //         newNode.next = null;
    //     }
    //     nextNodeF = nextNodeF.next
    //     nextNodeS = nextNodeS.next
    //     head = newNode
    // }
    // return head










//     //  Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

// var addTwoNumbers = function (l1, l2) {
//     let head = l1;
//     let head2 = l2;
//     let carry = 0;
//     let newNode = new ListNode();
//     let result = newNode
//     while (head !== null && head2 !== null) {
//         if (Math.floor((head.val + head2.val) / 10) > 0) {
//             console.log("1st");
//             newNode.next = new ListNode()
//             newNode.next.val = (head.val + head2.val) % 10
//             carry = Math.floor((head.val + head2.val) / 10)
//             newNode = newNode.next
//         } else {
//             console.log("2nd", carry);
//             newNode.next = new ListNode()
//             newNode.next.val = carry === 0 ? (head.val + head2.val) : (head.val + head2.val) + carry
//             carry = 0;
//             newNode = newNode.next
//             // newNode.next = null;
//         }

//         head = head.next
//         head2 = head2.next
//     }
//     return result.next
// };
// const nf3 = new ListNode(2)
// const nf2 = new ListNode(2, nf3)
// const nf1 = new ListNode(5, nf2)

// const ns3 = new ListNode(5)
// const ns2 = new ListNode(1, ns3)
// const ns1 = new ListNode(8, ns2)

// console.log(addTwoNumbers(nf1, ns1))
















