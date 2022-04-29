import { hotelsData } from "./data.js";
import { printInformation } from "./hotelInformation.js";

const hero = document.getElementById("hero");

hotelsData.forEach((element)=>{
    const imgHero = document.createElement("img")   
    imgHero.setAttribute("src", element.photo);   
    imgHero.setAttribute("alt", element.name);

    hero.appendChild(imgHero)

    imgHero.addEventListener("click", ()=>{
        printInformation(element)
    })

});