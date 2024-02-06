let body = document.querySelector("body")
let card = document.querySelectorAll(".card")
let containerDiv = document.querySelector(".container")
let fliped = 0

let nameCon = document.createElement("div")
nameCon.classList.add("nameCon")
nameCon.classList.add("animate__animated")

let cardDiv1 = document.createElement("div")
cardDiv1.classList.add("myCard")
cardDiv1.classList.add("card1")
cardDiv1.classList.add("animate__animated")

let cardDiv2 = document.createElement("div")
cardDiv2.classList.add("myCard")
cardDiv2.classList.add("card2")
cardDiv2.classList.add("animate__animated")

let cardDiv3 = document.createElement("div")
cardDiv3.classList.add("myCard")
cardDiv3.classList.add("card3")
cardDiv3.classList.add("animate__animated")
// console.log(nameCon)

let innerCardDiv1 = document.createElement("div")
innerCardDiv1.classList.add("innerCard")

let innerCardDiv2 = document.createElement("div")
innerCardDiv2.classList.add("innerCard")

let innerCardDiv3 = document.createElement("div")
innerCardDiv3.classList.add("innerCard")

let frontSideDiv1 = document.createElement("div")
frontSideDiv1.classList.add("frontSide")

let frontSideDiv2 = document.createElement("div")
frontSideDiv2.classList.add("frontSide")

let frontSideDiv3 = document.createElement("div")
frontSideDiv3.classList.add("frontSide")

let backSideDiv1 = document.createElement("div")
backSideDiv1.classList.add("backSide")
backSideDiv1.classList.add("backSide1")

let backSideDiv2 = document.createElement("div")
backSideDiv2.classList.add("backSide")
backSideDiv2.classList.add("backSide2")

let backSideDiv3 = document.createElement("div")
backSideDiv3.classList.add("backSide")
backSideDiv3.classList.add("backSide3")

let name1 = document.createElement("h1")
let name2 = document.createElement("h1")
let name3 = document.createElement("h1")

nameCon.append(cardDiv1)
innerCardDiv1.append(frontSideDiv1)
innerCardDiv1.append(backSideDiv1)

nameCon.append(cardDiv2)
innerCardDiv2.append(frontSideDiv2)
innerCardDiv2.append(backSideDiv2)

nameCon.append(cardDiv3)
innerCardDiv3.append(frontSideDiv3)
innerCardDiv3.append(backSideDiv3)

cardDiv1.append(innerCardDiv1)
cardDiv2.append(innerCardDiv2)
cardDiv3.append(innerCardDiv3)

// console.log(card)
// console.log(containerDiv)
card.forEach((element) => {
  element.addEventListener("click", () => {
    body.prepend(nameCon)

    let nameCard = document.querySelector(".nameCon")
    let card1 = document.querySelector(".card1")
    let card2 = document.querySelector(".card2")
    let card3 = document.querySelector(".card3")

    if (element.className === "card card1 animate__animated") {
      name1.innerHTML = "Ali"
      name2.innerHTML = "Abood"
      name3.innerHTML = "Shaikha"
      backSideDiv1.append(name1)
      backSideDiv2.append(name2)
      backSideDiv3.append(name3)
    }

    // console.log(element)
    // element.style.translate = "calc(var(--i)*20px)-300px"
    card1.style.opacity = "1"
    card1.classList.add("animate__slideInUp")

    setTimeout(() => {
      card2.style.opacity = "1"
      card2.classList.add("animate__slideInUp")
    }, 200)

    setTimeout(() => {
      card3.style.opacity = "1"
      card3.classList.add("animate__slideInUp")
    }, 400)

    setTimeout(() => {
      element.remove()
    }, 500)

    // element.onclick = function () {
    // // console.log("yes")
    // let newCard = document.createElement("div")
    // let divImg = document.createElement("img")
    // divImg.src = "./cards/8cxrbGE6i.jpg"
    // newCard.appendChild(divImg)
    // newCard.classList.add("card")
    // newCard.style.translate = "calc(var(--i)*20px)-300px"
    // containerDiv.appendChild(newCard)
    // newCard.onclick = function () {
    //     newCard.classList.add("card")
    // }
    // }
  })
})

innerCardDiv1.addEventListener("click", () => {
  innerCardDiv1.style.transform = "rotateY(180deg)"
  fliped++
  console.log(fliped)
  if (fliped === 3) {
    setTimeout(() => {
      cardDiv1.classList.remove("animate__slideInUp")
      cardDiv1.classList.add("animate__hinge")
    }, 8000)
    setTimeout(() => {
      cardDiv2.classList.remove("animate__slideInUp")
      cardDiv2.classList.add("animate__hinge")
    }, 8500)
    setTimeout(() => {
      cardDiv3.classList.remove("animate__slideInUp")
      cardDiv3.classList.add("animate__hinge")
    }, 9000)
    // console.log(cardDiv1)
    console.log("remove!")
    fliped = 0
    setTimeout(() => {
      name1.innerHTML = ""
      name2.innerHTML = ""
      name3.innerHTML = ""
      let myCard = document.querySelectorAll(".myCard")

      myCard.forEach((element) => {
        element.classList.remove("animate__hinge")
        console.log(element)
        element.style.opacity = "0"
      })
      innerCardDiv1.style.transform = "rotateY(0deg)"
      innerCardDiv2.style.transform = "rotateY(0deg)"
      innerCardDiv3.style.transform = "rotateY(0deg)"
      body.removeChild(nameCon)
    }, 12000)
  }
})
innerCardDiv2.addEventListener("click", () => {
  innerCardDiv2.style.transform = "rotateY(180deg)"
  fliped++
  console.log(fliped)
  if (fliped === 3) {
    setTimeout(() => {
      cardDiv1.classList.remove("animate__slideInUp")
      cardDiv1.classList.add("animate__hinge")
    }, 8000)
    setTimeout(() => {
      cardDiv2.classList.remove("animate__slideInUp")
      cardDiv2.classList.add("animate__hinge")
    }, 8500)
    setTimeout(() => {
      cardDiv3.classList.remove("animate__slideInUp")
      cardDiv3.classList.add("animate__hinge")
    }, 9000)
    // console.log(cardDiv1)
    console.log("remove!")
    fliped = 0
    setTimeout(() => {
      name1.innerHTML = ""
      name2.innerHTML = ""
      name3.innerHTML = ""
      let myCard = document.querySelectorAll(".myCard")

      myCard.forEach((element) => {
        element.classList.remove("animate__hinge")
        console.log(element)
        element.style.opacity = "0"
      })
      innerCardDiv1.style.transform = "rotateY(0deg)"
      innerCardDiv2.style.transform = "rotateY(0deg)"
      innerCardDiv3.style.transform = "rotateY(0deg)"
      body.removeChild(nameCon)
    }, 12000)
  }
})
innerCardDiv3.addEventListener("click", () => {
  innerCardDiv3.style.transform = "rotateY(180deg)"
  fliped++
  console.log(fliped)
  if (fliped === 3) {
    setTimeout(() => {
      cardDiv1.classList.remove("animate__slideInUp")
      cardDiv1.classList.add("animate__hinge")
    }, 8000)
    setTimeout(() => {
      cardDiv2.classList.remove("animate__slideInUp")
      cardDiv2.classList.add("animate__hinge")
    }, 8500)
    setTimeout(() => {
      cardDiv3.classList.remove("animate__slideInUp")
      cardDiv3.classList.add("animate__hinge")
    }, 9000)
    // console.log(cardDiv1)
    console.log("remove!")
    fliped = 0
    setTimeout(() => {
      name1.innerHTML = ""
      name2.innerHTML = ""
      name3.innerHTML = ""
      let myCard = document.querySelectorAll(".myCard")

      myCard.forEach((element) => {
        element.classList.remove("animate__hinge")
        console.log(element)
        element.style.opacity = "0"
      })
      innerCardDiv1.style.transform = "rotateY(0deg)"
      innerCardDiv2.style.transform = "rotateY(0deg)"
      innerCardDiv3.style.transform = "rotateY(0deg)"
      body.removeChild(nameCon)
    }, 12000)
  }
})
