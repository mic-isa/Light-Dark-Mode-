let On = document.getElementById("Light")
let Off = document.getElementById("Dark")
let Body = document.getElementById("body")

let Mode = document.getElementById("mode")

let Colors = ["white", "black",]


On.addEventListener("click", LightMode);

Off.addEventListener("click", DarkMode)

function LightMode() {
    Body.style.backgroundColor = Colors[0]
    Body.style.color = Colors[1]
    Mode.innerHTML = "Light Mode"
}

function DarkMode() {
    Body.style.backgroundColor = Colors[1] 
    Body.style.color = Colors[0] 
    Mode.innerHTML = "Dark Mode"
}
