// My Scripts

import CircleType from `circletype`;

console.log('Page Loaded');

newCircle = function() {
    var circle = document.createElement('div');
    circle.className = 'circle';
    document.body.appendChild(circle);
    return circle;
}