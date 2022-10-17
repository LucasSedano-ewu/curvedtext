// My Scripts
console.log('Page Loaded');

var demo1 = new CircleType(document.getElementById('demo1'));
window.addEventListener('resize', function updateRadius() {
  demo1.radius(demo1.element.offsetWidth / 2);
});
updateRadius();