function openOrSenior(data) {
    const membership = []
    // ...
    for (const i of data) {
        if (i[0] >= 55 && i[1] > 7) {
            membership.push("Senior")
        }
        else {
            membership.push("Open")
        }
    }
    return membership
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))