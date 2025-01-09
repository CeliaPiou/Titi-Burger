const listBurger = document.getElementById('select-your-burger')


fetch("https://titi.startwin.fr/products/type/burger")
.then(res => res.json())
.then(data => {

    let i = 0;
    data.forEach(eachburger => {

        let oneBurgerDiv = document.createElement('div');
        oneBurgerDiv.classList.add('burger-to-choose');
        i++;

        oneBurgerDiv.innerHTML =
        `
        <input type="radio" name="choix-burger" id="hamburger${i}">
        <label for="hamburger${i}">
            <div class="bg-img"><img alt="${eachburger.name}" src="${eachburger.image}"></div>
            <strong>${eachburger.name}</strong>
            <em> - ${eachburger.price.$numberDecimal}€</em>
        </label>
            <p>
            ${eachburger.description}
            </p>
        `

        listBurger.appendChild(oneBurgerDiv)
        oneBurgerDiv.style.margin = "5px";

    });
})

// VERIFICATION QU'UN CHOIX A ETE FAIT

let buttonNext = document.getElementById('button-submit');
let formulaire = document.getElementById('select-your-burger');
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
        window.location.href = '/2fries-click-collect.html';    }
    else {
        alert("Merci de sélectionner un de nos délicieux burgers afin de pouvoir continuer.")
    }

})
