console.log("this is working")

const car ={
    brand: "Tesla",
    overRated: false,
}


car.fast = true
console.log(car)

const p1 = document.getElementById('p1')


p1.innerHTML = "Hello there"
p1.innerHTML = "<h1>Ok, really now</h1>"

p1.style.color = 'blue'

const myFunction = () =>{
    alert("hi Class")
}

const changeColor = () =>{
    p1.style.color = 'red'
}

const getData = () => {
    window.fetch('https://codice-boca.web.app/menu')
    .then(response => response.json())
    .then(cleanData => console.log(cleanData))
}