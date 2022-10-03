

const btnUp = document.querySelector(".up-button");
      arrowUp = btnUp.querySelector("i");
const btnDown = document.querySelector(".down-button");
      arrowDown = btnDown.querySelector("i");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const divMainSlide = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let indexSlide = 0;

sidebar.style.top = `-${(divMainSlide - 1) * 100}vh`

// Слайд вверх
btnUp.addEventListener("click", () => {
    changeSlide("up");
    arrowUp.classList.add("up");
    setTimeout(() => {
        arrowUp.classList.remove("up");
    },500)
})
//Слайд вниз
btnDown.addEventListener("click", () => {
    changeSlide("down");
    arrowDown.classList.add("down");
    setTimeout(() => {
        arrowDown.classList.remove("down");
    },500)
})

function changeSlide ( dir) {
    if( dir === "up"){
        indexSlide++
        if(indexSlide === divMainSlide){
            indexSlide = 0;
        }
    }else if ( dir === "down") {
        indexSlide--
        if(indexSlide < 0){
            indexSlide = divMainSlide - 1;
        }
    }
    const height = container.clientHeight;//узнаем высоту экрана пользователя.

    mainSlide.style.transform = `translateY(-${indexSlide * height}px)`;
    sidebar.style.transform = `translateY(${indexSlide * height}px)`;
}