//  scroll magic niceness


(function () {
    
    gsap.registerPlugin(ScrollTrigger);
    "use strict"

    // stag-beetle gallery of images
    gsap.utils.toArray('.insect-grid').forEach(section => {
        const elems = section.querySelectorAll('.insect-image');
        // Set starting params for sections
        gsap.set(elems, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'Power3.out',
          overwrite: 'auto',
        });
        
        ScrollTrigger.create({
          trigger: section,
          start: 'top 60%',
          end: 'bottom 30%',
          markers: true,
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


})();
