document.getElementById('mySlide').onmousemove = function (event) {
    var x = event.offsetX;//относительно родителя
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}

// document.getElementById('mySlide').onmouseleave = function(event) {
//     document.getElementById('two').style.width = '820px';
// }