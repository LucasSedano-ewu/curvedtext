// My Scripts

console.log('Page Loaded');

newCircle = function() {
    var circle = document.createElement('div');
    circle.className = 'circle';
    document.body.appendChild(circle);
    return circle;
}

new CircleType(document.getElementById("demo1")).radius(384).dir(-1);