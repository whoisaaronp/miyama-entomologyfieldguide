//  scroll magic niceness
(function () {

    gsap.registerPlugin(ScrollTrigger);
    "use strict"

    const canvas = document.querySelector("#explode-view");
    // we're using a 2d context
    const context = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    // total amount of images we have in the folder
    let frameCount = 150;

    // create a bug insect to hold current frame object, not animatin DOm object
    // As the user scrolls increment the image count
    const bugs = { frame: 0 }
    // hold the images. in the array
    const images = [];

    // for loop
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `png/MAIN_${(i + 0).toString().padStart(5, '0')}.png`;
        images.push(img);
    }
    // console.log(images);

    //  animate the bugs object
    gsap.to(bugs, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            scrub: 0.5
        },
        // no parenthesis
        onUpdate: render

    });

    images[0].onload = render;

    function render() {
        // the wipe canvas each time it's called
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(bugs.frame);
        context.drawImage(images[bugs.frame], 0, 0);
    }

})();