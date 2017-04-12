var boxObj = {
    b0: document.getElementById('0'),
    b1: document.getElementById('1'),
    b2: document.getElementById('2'),
    b3: document.getElementById('3'),
    b4: document.getElementById('4'),
    b5: document.getElementById('5'),
    b6: document.getElementById('6'),
    b7: document.getElementById('7'),
    b8: document.getElementById('8')
};
var game = { p: 'X', playin: true };
var boxArr = [boxObj.b0, boxObj.b1, boxObj.b2, boxObj.b3, boxObj.b4, boxObj.b5, boxObj.b6, boxObj.b7, boxObj.b8];
var winner = () => {
    if ((boxArr[8].innerHTML != '' && boxArr[8].innerHTML === boxArr[7].innerHTML && boxArr[7].innerHTML === boxArr[6].innerHTML) ||
        (boxArr[5].innerHTML != '' && boxArr[5].innerHTML === boxArr[4].innerHTML && boxArr[4].innerHTML === boxArr[3].innerHTML) ||
        (boxArr[2].innerHTML != '' && boxArr[2].innerHTML === boxArr[1].innerHTML && boxArr[1].innerHTML === boxArr[0].innerHTML) ||
        (boxArr[8].innerHTML != '' && boxArr[8].innerHTML === boxArr[4].innerHTML && boxArr[4].innerHTML === boxArr[0].innerHTML) ||
        (boxArr[6].innerHTML != '' && boxArr[6].innerHTML === boxArr[4].innerHTML && boxArr[4].innerHTML === boxArr[2].innerHTML) ||
        (boxArr[0].innerHTML != '' && boxArr[0].innerHTML === boxArr[3].innerHTML && boxArr[3].innerHTML === boxArr[6].innerHTML) ||
        (boxArr[1].innerHTML != '' && boxArr[1].innerHTML === boxArr[4].innerHTML && boxArr[4].innerHTML === boxArr[7].innerHTML) ||
        (boxArr[2].innerHTML != '' && boxArr[2].innerHTML === boxArr[5].innerHTML && boxArr[5].innerHTML === boxArr[8].innerHTML)) {
        game.playin = false;
        let status = document.getElementById('status');
        status.innerHTML = `${game.p}, You Won!`;
    }
};
var youClick = () => {
    let cl = [ 'purple', 'pink', 'hotpink', 'orange', 'yellow', 'red', 'blue', 'lightgreen', 'lightblue' ];
    for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].addEventListener('click', function () {
            boxArr[i].setAttribute('style', `background-color: ${cl[i]}`);
            if (game.playin) {
                boxArr[i].innerHTML = `<p>${game.p}</p>`;
            }
            winner();
            if (game.playin && game.p === 'X') {
                game.p = 'O';
            } else if (game.playin && game.p === 'O') {
                game.p = 'X';
            }
        });   
    }
};
youClick();