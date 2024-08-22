// Catch all buttons
let btn = document.querySelectorAll(".drum");

// Run a forEach loop on buttons array and add event listener to each element
btn.forEach(function (el) {
    el.addEventListener('click', function () {
        playSound(el.textContent);
    });
});

function playSound(key) {
    switch (key) {
        case 'w':
            let wsound = new Audio('sounds/tom-1.mp3');
            wsound.play();
            break;

        case 'a':
            let aSound = new Audio('sounds/tom-2.mp3');
            aSound.play();
            break;

        case 's':
            let sSound = new Audio('sounds/tom-3.mp3');
            sSound.play();
            break;

        case 'd':
            let dSound = new Audio('sounds/tom-4.mp3');
            dSound.play();
            break;

        case 'j':
            let jSound = new Audio('sounds/kick-bass.mp3');
            jSound.play();
            break;

        case 'k':
            let kSound = new Audio('sounds/crash.mp3');  // Fixed extra space
            kSound.play();
            break;

        case 'l':
            let lSound = new Audio('sounds/snare.mp3');
            lSound.play();
            break;

        default:
            console.log("Unhandled key: " + key);
            break;
    }
}

