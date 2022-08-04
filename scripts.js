const menuElement = document.querySelector('#menu')

fetch('https:/codice-boca.web.app/menu')
    .then(res => res.json())
    .then(menuItems => {
        let html = ''

        menuItems.forEach((recipe) => {
            
            let htmlSegment = ` <h3>${recipe.title}</h3> <p>${recipe.description}</p>`

            html += htmlSegment
        });
        menuElement.innerHTML = html
    })

