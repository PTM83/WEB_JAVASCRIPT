
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
function sticker_answer() {
    var sticker_num1 = parseInt(document.getElementById("in_first").value,10);
    var sticker_num2 = parseInt(document.getElementById("in_second").value,10);
    var sticker_num3 = parseInt(document.getElementById("in_third").value,10);

    var answer_sticker =  document.getElementById("ans_sticker");

    const TOTAL_STICKERS = sticker_num1+sticker_num2+sticker_num3;

    if (TOTAL_STICKERS > 10) {
        answer_sticker.innerHTML = "You can only choose 10 stickers in total";
    }
    else if (TOTAL_STICKERS < 10) {
        answer_sticker.innerHTML = `You can still choose ${10 - TOTAL_STICKERS} stickers`;
    }
    else {
        answer_sticker.innerHTML = "Awesome you have chosen exactly 10 Sticker!"
    }

    //alert(sticker_num1)//
}

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
