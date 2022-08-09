const images = [
    "0.jpeg", "1.jpeg", "2.jpeg","3.jpeg","4.jpeg","5.jpeg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

// js에서 요소 만들어서 그걸 html에 추가하는 법
const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)