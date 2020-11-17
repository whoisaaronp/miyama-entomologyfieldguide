//  scroll magic niceness


(function () {
    
    gsap .registerPlugin(ScrollTigger);
    "use strict"
    
    gsap.to("#vertical", 1, {delay: .5, y:600, ease:Power2.easeOut});
    console.log("fired");

    
});
