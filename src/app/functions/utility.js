function range(n) {
    let array = []
    for (let i = 0; i < n + 1; i++) {
        array.push(i)
    }
    return array
}
function randColor() {
    const hex = '0123456789abcdef'
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * 15.99)]
    }
    return hexCode
}
function permutation(list) {
    const len = list.length
    let ndex = []
    let rands = []; for (let i = 0; i < len; i++) { rands.push(Math.random()) }
    for (let i = 0; i < len; i++) {
        let theIndex = rands.indexOf(Math.max(...rands))
        ndex.push(theIndex)
        rands[theIndex] = -1
    }
    let p = []
    for (const i of ndex) { p.push(list[i]) }
    return p
}
function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
export { range, randColor, permutation, sleep }