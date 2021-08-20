//top player 
const sectionTitle = document.getElementsByClassName('title');
for (let title of sectionTitle) {
    title.style.color = 'rgba(238, 105, 105, 1)';

}
const playerNames = document.getElementsByClassName('player-name');
for (let playerN of playerNames) {
    playerN.style.color = 'white';

}

const playerBg = document.getElementsByClassName('player');
for (let player of playerBg) {
    player.style.backgroundColor = 'rgba(105, 109, 238, 1)';

}
//player list design
// document.getElementById('playerALL').addEventListener('click', function (event) {
//     event.target.remove();
// })

// document.getElementById('add-Btn').addEventListener('click', function () {

//     const playerList = document.getElementById('playerALL')
//     const element = document.createElement('li');
//     element.classList.add("playerName");
//     element.innerText = 'player-01';
//     playerList.appendChild(element);
//     console.log(element);
// })
///increment number

// function getInputNumber() {
//     const inputNumber = document.getElementById('input-number');
//     const inputNumberTxt = inputNumber.value;
//     const inputNum = parseInt(inputNumberTxt);
//     if (inputNum == 5) {
//         document.getElementById('plus-btn').setAttribute('disabled', true);
//     }
//     else {
//         let num = inputNum + 1;
//         inputNumber.value = num;
//     }
// }

// document.getElementById('plus-btn').addEventListener('click', function () {
//     getInputNumber();
// })