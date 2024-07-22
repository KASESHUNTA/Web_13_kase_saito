"use strict";




document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('#tex1', {
    opacity: 0,
    translateY: "100%",
    scrollTrigger: {
      start: "35% 60%",
      end: "40% center",
      toggleActions: "play none none reverse"

      
    }
  });

  gsap.from('#tex2', {
    opacity: 0,
    translateY: "100%",
    scrollTrigger: {
      start: "48% 60%",
      end: "55% center",
      toggleActions: "play none none reverse"

      
    }
  });
});
