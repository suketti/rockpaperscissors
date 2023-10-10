const options = ["rock", "paper", "scissor"]

function decideWinner(selection, enemyWeapon) {
    if (selection == enemyWeapon) {
        return null
    } else if (selection == "rock") {
        return enemyWeapon == "paper" ? true : false
    } else if (selection == "paper") {
        return enemyWeapon == "scissor" ? true : false
    } else if (selection == "scissor") {
        return enemyWeapon == "rock" ? true : false
    }
}

function gameStart(selection) {
    const randomWeapon = options[Math.round(Math.random() * 2)]
    const result = decideWinner(selection, randomWeapon)
   if (result) {
    alert("Szamitogep nyert")
    document.getElementById("score").innerText = Number.parseInt(document.getElementById("score").innerText) - 1;
   } else if (!result) {
    alert ("Te nyertel")
    document.getElementById("score").innerText = Number.parseInt(document.getElementById("score").innerText) + 1;
   } else if (result == null) {
    alert("Dontetlen")
   }
}