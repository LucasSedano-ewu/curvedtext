// My Scripts
console.log('Page Loaded');

newCircle = function() {
    var circle = document.createElement('div');
    circle.className = 'circle';
    document.body.appendChild(circle);
    return circle;
}

// <h1 id="demo1">Decisions define the Direction of the Design. Design without Direction -- is just Decoration. Anyone who makes Decisions is a: Designer. </h1></h2>
new CircleType(document.getElementById('demo1'))
  .radius(384);