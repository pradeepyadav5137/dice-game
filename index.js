const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const startButton = document.querySelector(".btn button")
let diceImage = document.querySelector("#imagebox img")
let buttons = document.querySelectorAll(".selectbox button")
// console.log(diceImage)
console.log(buttons)


startButton.onclick = () => {

    screen1.style.display = "none";
    screen2.style.display = "flex";
}



   let  selectBoxInput;
let score = 0;

function appentToDisplay(Number) {
    selectBoxInput =parseInt(Number) ;
    buttons.forEach(button => button.classList.remove("highlight"));
    document.getElementById(`button${selectBoxInput}`).classList.add("highlight");
    
}


let pictures = [
    "dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png"];

diceImage.onclick = () => {

    if (selectBoxInput === undefined) {
        alert("Please select a number before clicking the dice.");
        
    }

    else {
        let randomIndex = Math.floor(Math.random() * pictures.length)


        let xyz = pictures[randomIndex]
        diceImage.src = xyz;

        if (randomIndex + 1 == selectBoxInput) {

            function addscore() {
                score += 20
                //    const score = document.querySelector("#pradeep").innerHTML
                let anuj = document.getElementById("scoreBoard")
                anuj.innerHTML = score;

            }
            addscore();
        }
        else {
            score -= 5
            let anuj = document.getElementById("scoreBoard")
            anuj.innerHTML = score;
        }


    }
}