console.log('Loaded!');
//Change the text of main-text div
var element = document.getElementById('main-text');
    
element.innerHTML = "New Value"; 

//Move the image (Madi)
var img = document.getElementById('madi');
var marginLeft = 0;
function moveright() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveright, 100); //Every 100ms, apply this moveright function
    img.style.marginLeft = '100px';
}; 
    