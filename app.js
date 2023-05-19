

function increment1() {
    
    value1++
    scoreA.innerText = value1
    
}

function increment2() {
    value2++
    scoreB.innerText = value2
}   

function reset() {
    value1 = value2 = 0
    scoreA.innerHTML = scoreB.innerHTML = 0
}


const scoreA = document.getElementById('scoreA')
const scoreB = document.getElementById('scoreB')

let value1 = 0
let value2 = 0




