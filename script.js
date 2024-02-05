let card = document.querySelectorAll(".card")
let containerDiv = document.querySelector(".container")
console.log(card)
console.log(containerDiv)
card.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element)
    element.style.translate = "calc(var(--i)*20px)-300px"
    element.onclick = function () {
      console.log("yes")
      let newCard = document.createElement("div")
      let divImg = document.createElement("img")
      divImg.src = "./cards/8cxrbGE6i.jpg"
      newCard.appendChild(divImg)
      newCard.classList.add("card")
      newCard.style.translate = "calc(var(--i)*20px)-300px"
      containerDiv.appendChild(newCard)
      newCard.onclick = function () {
        newCard.classList.add("card")
      }
    }
  })
})
