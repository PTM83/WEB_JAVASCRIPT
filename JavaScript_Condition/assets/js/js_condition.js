
//First Challenge//
var border_image = document.getElementById("border_image");
var color_Title = document.getElementById("Title");
const Select_Color = document.getElementById("Colors");

let isBorderActive = false;

border_image.onclick = function () {
    if (isBorderActive) {
        border_image.style.border = "none";
        color_Title.style.color = Select_Color.value;
    }
    else {
        border_image.style.border = `2px solid ${Select_Color.value}`;
        color_Title.style.color = "black";
    }

    isBorderActive = !isBorderActive;
}

const Border_Colors = ["red", "blue", "orange", "cyan"];
const SelectColor = document.getElementById("Colors");

for (let i = 0; i < Border_Colors.length; i++) {
    const optionColors = document.createElement("option");
    optionColors.value = Border_Colors[i].toLowerCase();
    optionColors.text = Border_Colors[i];
    SelectColor.appendChild(optionColors);
}

//Second Challenge//


//Third Challenge//
for (let j = 1; j <= 3; j++) {
    const selectNumber = document.getElementById(`NumPass${j}`);
    for (let i = 0; i <= 9; i++) {
        const optionNumber = document.createElement("option");
        optionNumber.value = i.toString();
        optionNumber.text= i;
        selectNumber.appendChild(optionNumber);
        console.log(i)
    }
}


function correctPassword() {
    var num1 = document.getElementById("NumPass1").value;
    var num2 = document.getElementById("NumPass2").value;
    var num3 = document.getElementById("NumPass3").value;

    var totalNum = num1+num2+num3
    var text1 = document.querySelector("#textPassword");
    if (totalNum === "911") {
        text1.innerHTML = "Password 1 correct"
    } else if(totalNum === "714") {
        text1.innerHTML = "Password 2 correct"
    } else {
        text1.innerHTML = "Password 1 and Password 2 are not correct"
    }

}
