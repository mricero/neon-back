import { neonCursor } from 'https://unpkg.com/threejs-toy';

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
});

// Scroll Header Hide/Show
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden'); // Scroll down: hide header
  } else {
    header.classList.remove('hidden'); // Scroll up: show header
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
