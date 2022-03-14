import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"


ReactDOM.render(<App/> , document.getElementById("root"))


const lastCard = document.querySelector(".card__container")
if (lastCard){
    lastCard.removeChild(lastCard.lastElementChild)
}
