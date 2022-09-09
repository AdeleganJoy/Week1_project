function display_message(){
    document.getElementById("demo").innerHTML = "My notebook";
}

window.onload = function() {
    var button = document.getElementById("my-button");
    button.onclick = display_message;
}
