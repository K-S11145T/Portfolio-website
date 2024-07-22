var typed = new Typed("#elem", {
  strings: ["Web Developer", "Video Editor", "Web Designer"],
  typeSpeed: 100,
});

let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap
  .to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 1,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee_inner", {
  xPercent: 0,
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  arrows.forEach((arrow) => {
    if (isScrollingDown) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });
  currentScroll = window.pageYOffset;
});

function sheryanime() {
  Shery.imageEffect(".img", {
    style: 2,
    gooey: true,

    config: {
      resolutionXY: { value: 100 },
      distortion: { value: true },
      mode: { value: -3 },
      mousemove: { value: 0 },
      modeA: { value: 1 },
      modeN: { value: 0 },
      speed: { value: 1, range: [-500, 500], rangep: [-10, 10] },
      frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
      angle: { value: 0.5, range: [0, 3.141592653589793] },
      waveFactor: { value: 1.4, range: [-3, 3] },
      color: { value: 10212607 },
      pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
      quality: { value: 5, range: [0, 10] },
      contrast: { value: 1, range: [-25, 25] },
      brightness: { value: 1, range: [-1, 25] },
      colorExposer: { value: 0.18, range: [-5, 5] },
      strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
      exposer: { value: 8, range: [-100, 100] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 1.420654911838791 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.84, range: [0, 10] },
      metaball: { value: 0.69, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.61, range: [0, 2] },
      noise_scale: { value: 12.21, range: [0, 100] },
    },
  });
}

document.addEventListener("mousemove", (dets) => {
  gsap.to("#logo1", {
    left: dets.x - 250,
    top: dets.y - 400,
  });
});
document.querySelector("#name").addEventListener("mouseenter", () => {
  gsap.to("#name", {
    scale: 1.1,
  });
  gsap.to("#logo1", {
    opacity: 1,
  });
});
document.querySelector("#name").addEventListener("mouseleave", () => {
  gsap.to("#name", {
    scale: 1,
  });
  gsap.to("#logo1", {
    opacity: 0,
  });
});

var tl = gsap.timeline()
gsap.from("#land #nav" , {
  opacity: 0,
  duration: 2,
  
 
})
gsap.from("#gojo" , {
  opacity: 0,
  duration: 2,
  
})
tl.from("#landingh2 h2 , button" , {
  y:50,
  opacity: 0,
  duration: 1.5,
  stagger:0.5
})

gsap.from("#work h4" , {
  opacity : 0 ,
  duration : 1.5,
  y:100,
  stagger : 0.5 ,
  scrollTrigger :{
    trigger : "#work",
    scroller : "body",
    start : "top 70%",
    end : "top 10%"
  }
})
tl.from(" #cont #conts" , {
  opacity : 0 ,
  duration : 1.5,
  x:100,
  stagger : 0.5 
})




sheryanime();
// gsapanimation();
