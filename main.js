let fighters = [
  { icon: "🐉", value: 3 },
  { icon: "🐥", value: 0 },
  { icon: "🐊", value: 2 },
  { icon: "💩", value: 0 },
  { icon: "🦍", value: 3 },
  { icon: "🐢", value: 1 },
  { icon: "🐩", value: 1 },
  { icon: "🦭", value: 2 },
  { icon: "🦀", value: 1 },
  { icon: "🐝", value: 1 },
  { icon: "🤖", value: 3 },
  { icon: "🐘", value: 3 },
  { icon: "🐸", value: 1 },
  { icon: "🕷", value: 1 },
  { icon: "🐆", value: 2 },
  { icon: "🦕", value: 2 },
  { icon: "🦁", value: 3 }
];


let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    fightButton.disabled = true;
    fightButton.textContent = "Generating Fight...";
    setTimeout(() => {
        fightButton.disabled = false;
        fightButton.textContent = "Pick Fighters!";
    },5000)
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    
    stageEl.textContent = fighters[randomIndexOne].icon + " vs " + fighters[randomIndexTwo].icon
    if (fighters[randomIndexOne].value > fighters[randomIndexTwo].value) {
         showToast(`${fighters[randomIndexOne].icon} Wins!`);
    } else if (fighters[randomIndexOne].value < fighters[randomIndexTwo].value) {
         showToast(`${fighters[randomIndexTwo].icon} Wins!`);
    } else {
         showToast("Everyone Wins! 🤝");
    }
})
function showToast(message, delay = 2500) {
  const toast = document.getElementById("toast");

  setTimeout(() => {
    toast.textContent = message;
    toast.classList.add("show");

    // 
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);

  }, delay); 

}


