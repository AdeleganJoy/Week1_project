function display_message(){
    document.getElementById("demo").innerHTML = "My notebook";
}


function display_list(){
    document.getElementById("list").innerHTML = '<li>Carrot</li>';
}

window.onload = function() {
    var button_1 = document.getElementById("add-data");
    var button_2 = document.getElementById("my-button");
    button_1.onclick = display_list;
    button_2.onclick = display_message;
}
