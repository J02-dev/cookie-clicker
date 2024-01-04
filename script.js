

let button = document.querySelector('button')
let count = 0
let p = document.querySelector('p')

button.addEventListener('click', play)

function play(e) {
    console.log('1')
   count++; 
   document.querySelector('p').innerText = count
}