let arr = [
    "What is the capital of France?",
    "How many days are in a week?",
    "What color is the sky on a clear day?",
    "What is 2+2?",
    "What is the first letter of the alphabet?"
  ];
  let arr2 = ["paris", "seven", "blue", "four", "A"];
  let random = Math.trunc(Math.random() * 5);
  const q = document.querySelector(".q");
  const a = document.querySelector(".box1");
  
  q.textContent = arr[random];
  for (let i = 0; i < arr2[random].length; i++) {
    let el = document.createElement("div");
    a.appendChild(el);
  }
  
  const letters = document.querySelectorAll(".a");
  
  letters.forEach((letter) => {
    letter.addEventListener("click", function () {
      const clickedLetter = this.textContent;
  
      for (let i = 0; i < arr2[random].length; i++) {
        if (arr2[random][i] === clickedLetter) {
          a.children[i].textContent = clickedLetter;
        }
      }
    });
  });