//Gets the browsers size to check responsive layout

window.addEventListener("resize", getBrowserSize);

function getBrowserSize() {
    var x = window.innerWidth;
    var x = window.innerWidth;
    var y = window.innerHeight;

    document.getElementById('dimensions').innerHTML = 
        x + ' x ' + y + 'px';
}





