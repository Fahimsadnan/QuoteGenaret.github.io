"use strict"

let content = document.getElementById("content");
let author = document.getElementById("author");
let btn = document.getElementById("btn")



let colorBase = "https://www.colr.org/json/colors/ffba13,ff0000"
let Base = "http://api.quotable.io/random"

function getQuote(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        content.innerHTML = data.content
        author.innerHTML = " ~ " + data.author + " ~"
    })
}

function getColor(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.body.style.color = `"${data.hex}"`
    })
}
    
btn.addEventListener("click", () => {
    getQuote(Base)
    getColor(colorBase)
})

   

