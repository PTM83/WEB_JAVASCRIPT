//First Challenge//
var border_image = document.getElementById("border_image");
var color_Title = document.getElementById("Title");
const Select_Color = document.getElementById("Colors");

let isBorerActive = false;

border_image.onclick = function () {
    if (isBorerActive) {
        border_image.style.border = "none";
        color_Title.style.color = Select_Color.value;
    }
    else {
        border_image.style.border = `2px solid ${Select_Color.value}`;
        color_Title.style.color = "black";
    }

    isBorerActive = !isBorerActive;
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
