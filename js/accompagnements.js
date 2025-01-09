const listAside = document.getElementById('select-your-aside')


fetch("https://titi.startwin.fr/products/type/accompagnement")
.then(res => res.json())
.then(data => {

    let i = 0;

    data.forEach(eachAside => {

        let oneAsideDiv = document.createElement('div');
        oneAsideDiv.classList.add('aside-to-choose');
        i++;

        oneAsideDiv.innerHTML =

        `
        <input type="radio" name="burger" id="accompagnement${i}">
        <label for="accompagnement${i}">
            <div class="bg-img"><img src=" ${eachAside.image}" alt="${eachAside.name}"></div>
            <span>${eachAside.name}</span>
        </label>
            <p>
            ${eachAside.description}
            <em>${eachAside.price.$numberDecimal}€</em>
            </p>           `

        listAside.appendChild(oneAsideDiv)
        oneAsideDiv.style.margin = "5px";

    });

})


// VERIFICATION QU'UN CHOIX A ETE FAIT

let buttonNext = document.getElementById('button-submit');
let formulaire = document.getElementById('select-your-aside');
let i = 0;
let checked = false;


buttonNext.addEventListener('click', () => {
    checked = false;

    for (let i = 0; i < formulaire.length; i++) {

        if (formulaire[i].checked) {
            checked = true;
            break;
        }
    }

    if (checked) {
        window.location.href = '/3boissons-click-collect.html';    }
    else {
        alert("Merci de sélectionner un de nos fameux accompagnements afin de pouvoir continuer.")
    }

})
