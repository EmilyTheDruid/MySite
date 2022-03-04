let modeSwitch = document.getElementById("modeswitch");

function modeChange() {
    if (jeremyskalla.style.color == "rgb(33, 33, 33)") {
        jeremyskalla.style.color = "#FAFAFA";
        content.style.color = "#FAFAFA";
        document.body.style.backgroundColor = "#212121";
        
    }
    else {
        jeremyskalla.style.color = "#212121";
        content.style.color = "#212121";
        document.body.style.backgroundColor = "#FAFAFA";
    }
}

modeSwitch.addEventListener('change', modeChange);