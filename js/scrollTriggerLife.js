//  scroll magic niceness


(function () {
    
    gsap.registerPlugin(ScrollTrigger);
    "use strict"

    // 1. stag-beetle gallery of images
    // 2. get all the sections and convert to elems
    gsap.utils.toArray('#insect-cycle-grid, #insect-cycle-grid-2, #insect-cycle-grid-3, #insect-cycle-grid-4').forEach(section => {
        const elems = section.querySelectorAll('.insect-cycle-image,.insect-cycle-stlye-2,.insect-cycle-stlye-3');
        // Set starting params for sections
        gsap.set(elems, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'Power3.out',
          overwrite: 'auto',
        });
        //explaination
        //https://attacomsian.com/blog/javascript-htmlcollection
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%',
          end: 'bottom 30%',
          // remove the markers from your file
          markers: false,
          onEnter: () => gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
          }),
          onLeave: () => gsap.to(elems, {
            y: -50,
            opacity: 0,
            stagger: 0.2,
          }),
          onEnterBack: () => gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: -0.2,
          }),
          onLeaveBack: () => gsap.to(elems, {
            y: 50,
            opacity: 0,
            stagger: -0.2,
          }),
        });
      })
      //  each time i scroll up and down the elems(elements in my const elems above) will render in and out with the onenterback and leavefeature

})();
