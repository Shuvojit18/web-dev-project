//creating a gsap timeline
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

//adding timeline for left to right animation
tl.fromTo('.animL', {opacity: 0}, {opacity: 1,duration:2});

//adding timeline for opacity so it fades in
tl.to('.animL',{x:'0%', duration: 1, stagger: 0.5}, "-=2");

//adding timeline for right to left animation
tl.fromTo('.animR', {opacity: 0}, {opacity: 1,duration:2});

//adding timeline for opacity so it fades in
tl.to('.animR',{x:'0%', duration: 1, stagger: 0.5}, "-=2");

//adding timeline for up to down animation
tl.to('.animU',{y:'0%', duration: 1, stagger: 0.25});