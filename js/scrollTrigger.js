//  scroll magic niceness


(function () {
    
    gsap.registerPlugin(ScrollTrigger);
    "use strict"
    // stag-beetle landing page
    gsap.from("#vertical", 1, {autoAlpha: 0, stagger: 0.2, delay: 0.5, y:800, ease:Expo.easeOut});
    gsap.from("#delay-button", 1, {autoAlpha: 0, stagger: 0.2, delay: 0.8, y:800, ease:Expo.easeOut});
    // console.log("fired");

})();
