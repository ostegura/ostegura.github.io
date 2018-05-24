var tmpindx = 0;
banner();

function banner() {
    var i;
    var arr = document.getElementsByClassName("banner");
    for (i = 0; i < arr.length; i++) {
       arr[i].style.display = "none";  
    }
    tmpindx++;
    if (tmpindx > arr.length) {tmpindx = 1}    
    arr[tmpindx-1].style.display = "block";  
    setTimeout(banner, 10000);    
}