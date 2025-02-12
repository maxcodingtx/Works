
// getting audio file, assigning it to 'audio' variable
const audio = new Audio('/assets/dombummel.mp3');
// letting audio loop
audio.loop = true;
// array, both values will be used to create event listeners
const listeners = ['mousedown', 'keypress'];
for (let i=0;i<listeners.length;i++) {
    // creating eventListeners from each value in 'listeners' array
    window.addEventListener(listeners[i],function hasInteracted() {
        /* 
        since this is a for loop the program will want to remove both eventlisteners
        twice. This does not cause problems for the website but to save time I will 
        have the function return early if the audio is playing (meaning that the website
        has been interacted with).
        */
        if (!audio.paused) {
            return;
        };
        // deleting event listeners
        for (let i=0; i<listeners.length; i++) {
            window.removeEventListener(listeners[i],hasInteracted);
        };
        // play the audio
        audio.play();
    });
};

// assigning muteButton element to muteButton variable
const muteButton = document.getElementById('muteButton');
muteButton.addEventListener('click',() => {
    // if audio is already muted, ignore
    if (audio.volume = 0) {
        return;
    };
    // else, mute the audio
    audio.volume = 0;
});

// assigning unmuteButton element to unmuteButton variable
const unmuteButton = document.getElementById('unmuteButton');
unmuteButton.addEventListener('click', () => {
    // reset the audio only if the audio is muted
    if (audio.volume == 0) {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();
    }
});

// assigning div with 'randomImageContainer' id to variable
const randomImageContainer = document.getElementById('randomImageContainer');
randomImageContainer.addEventListener('click', () => {
    // generating random number
    var randomInt = Math.ceil(Math.random()*4);
    // attaching random number to 'randomImage'
    var idSelector = `randomImage${randomInt}`;
    // using 'idSelector' to select random <a></a> tag
    var randomImageElement = document.getElementById(idSelector);
    // getting the links to selected <a></a> tag
    var randomImageLink = randomImageElement.href;
    // opening link to selected <a></a> tag on new window
    window.open(randomImageLink,'_blank');
})