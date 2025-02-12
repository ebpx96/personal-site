var counter = (Math.ceil(Math.random() * 6));
var counter2 = (Math.ceil(Math.random() * 6));

document.querySelector(".img1").setAttribute('src', 'images/dice' + counter + '.png');
document.querySelector(".img2").setAttribute('src', 'images/dice' + counter2 + '.png');

if (counter > counter2) {
    document.querySelector('h1').textContent = 'Player 1 Wins!';
    document.querySelector('div.container').setAttribute('class', 'container player1-wins');
}
else if (counter2 > counter) {
    document.querySelector('h1').textContent = 'Player 2 Wins!';
    document.querySelector('div.container').setAttribute('class', 'container player2-wins');
}
else {
    document.querySelector('h1').textContent = 'Draw!';
}