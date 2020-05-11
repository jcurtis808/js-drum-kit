
const playSound = e => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

//--this way doesn't work because arrow function changes value of this to 'window' 
// const removeTransition = e => {
//     if (e.propertyName !== 'transform') return;
//     console.log(this);
// }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


// -- my approach to removing 'playing' class 
// window.addEventListener('keyup', e => {
//     const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
//     if (!key) return;
//     const off = document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove('playing');
// })  

