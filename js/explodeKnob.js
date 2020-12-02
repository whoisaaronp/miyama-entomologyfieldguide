//  scroll magic niceness
(function () {

    // gsap.registerPlugin(ScrollTrigger);
    "use strict"

    const dot0 = document.getElementById("#dot0");
    const dot1 = document.getElementById("#dot1");
    const dot2 = document.getElementById("#dot2");
    const canvas = document.querySelector("#explode-view");
    // we're using a 2d context, draw on the canvas
    const context = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    // total amount of images we have in the folder
    let frameCount = 150;

    // create a bug insect to hold current frame object, not animating DOM object
    // As the user scrolls increment the image count
    const bugs = { frame: 0 }
    // hold the images. in the array
    const images = [];

    // reloading for loop making it less than or equal to… get to 150
    for (let i = 0; i <= frameCount; i++) {
        const img = new Image();
        img.src = `png/MAIN_${(i + 0).toString().padStart(5, '0')}.png`;
        images.push(img);
    }
    //  animate the bugs object, no dropped frames with using 150 frames istead
    const sliderKnob = document.getElementById('slider-knob');
    //  set the variable to the framecount
    sliderKnob.setAttribute('max', frameCount);
    sliderKnob.addEventListener('input', (e) => {
        bugs.frame = parseInt(e.target.value, 10);
        render();

        // if else for hiding until end
        if (bugs.frame === frameCount) {
            // show the dots
            dot0.style.display = 'block'
            dot1.style.display = 'block'
            dot2.style.display = 'block'
        } else {
            // hide them
            dot0.style.display = 'none'
            dot1.style.display = 'none'
            dot2.style.display = 'none'
        };
        console.log(dot0);
    });

    images[0].onload = render;

    function render() {
        // the wipe canvas each time it's called
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(bugs.frame);
        context.drawImage(images[bugs.frame], 0, 0);
    }

})();