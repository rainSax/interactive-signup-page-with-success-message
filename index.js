var email;

document.querySelector("input").addEventListener("click", function () {
    // clear the input box
    document.querySelector("input").setAttribute("value", "");
    document.querySelector("input").style.opacity = 1;
})

document.querySelector("button").addEventListener("click", function () {
    // validate input
    // check not blank, check valid email
    var suggestion = document.querySelector("input").value;
    if (validate(suggestion))
        stateChange();
})

function stateChange() {
    document.querySelector(".content").style.visibility = "hidden";
    document.getElementById("invalid").style.visibility = "hidden";
    document.querySelector(".thanks").style.visibility = "visible";
}

function validate(suggestion) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (suggestion.match(validRegex)) {
        email = suggestion;
        // console.log(email);
        document.querySelector("#inputtedemail").textContent = email;
        document.querySelector("#inputtedemail").style.fontWeight = 700;
        return 1;
    }
    else {
        document.querySelector("input").style.background = "rgba(255, 97, 85, 0.15)";
        document.querySelector("input").style.border = "1px solid #FF6155";
        document.getElementById("invalid").style.visibility = "visible";
    }
    return 0;
}