const container = document.querySelector(".container");
const images = document.querySelectorAll(".slide");

const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")

let count = 0;

images.forEach((item, index) =>{
    item.style.left = `${index * 100}%`
})

const prev = () =>{
    if(count > 0){
       count --
       imageSlider()
    }
}

const next = () =>{
    if(count < images.length - 1){
      count ++
      imageSlider()
    }
}

const imageSlider = () =>{
    images.forEach((item, index) =>{
        item.style.transform = `translateX(-${count * 100}%)`
    });

    prevButton.disable = count === 0
    nextButton.disable = count === images.length - 1
}

prevButton.disable = true