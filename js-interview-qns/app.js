document.getElementById("name").onclick = function(){
	var name = prompt("Enter your input");
    processInput(name);
}

document.getElementById("reset").onClick = function() {
    var ol = document.getElementById("outputName");
    while (ol.hasChildNodes) {
        ol.removeChild();
    }
}

var processInput = (input) => {
    var arr = input.split(' ');
    console.log(arr);
    for (let elem of arr) {
        var ol = document.getElementById("outputName");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(elem));
        ol.appendChild(li);
    }
}
