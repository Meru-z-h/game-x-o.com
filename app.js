let game = document.querySelector('#game');
let result = document.querySelector('#result');
let reset = document.querySelector('.reset');


let x = 'X';
let o = 'O';
let cont = 0;
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


for (let i = 0; i < 9; i++) {
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    game.appendChild(btn);

    btn.addEventListener('click', step)
}
let btns = document.querySelectorAll('.btn')

function step() {
    cont++;
    if (cont % 2 == 0) {
        this.innerHTML = o;
    } else {
        this.innerHTML = x;
    }

    this.removeEventListener('click', step);
    winner();
}

function winner() {
    if (cont == 9) {
        result.innerHTML = 'draw';
    }
    for (let k = 0; k < win.length; k++) {
        if (btns[win[k][0]].innerHTML == x && btns[win[k][1]].innerHTML == x && btns[win[k][2]].innerHTML == x) {
            result.innerHTML = 'Win x';
            removeBtn();
        } else if (btns[win[k][0]].innerHTML == o && btns[win[k][1]].innerHTML == o && btns[win[k][2]].innerHTML == o) {
            result.innerHTML = 'Win o';
            removeBtn();
        }
    }

}

function removeBtn() {
    for (let btn of btns) {
        btn.removeEventListener('click', step)
    }
}

reset.addEventListener('click', function () {
    cont = 0;
    for (let btn of btns) {
        btn.addEventListener('click', step)
        btn.innerHTML = '';

    }
    result.innerHTML = '';
})
