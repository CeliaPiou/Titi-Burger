const listDrinks = document.getElementById('select-your-drink')


fetch("https://titi.startwin.fr/products/type/boisson")
.then(res => res.json())
.then(data => {

    data.forEach(eachDrink => {

        let oneDrinkDiv = document.createElement('div');
        oneDrinkDiv.classList.add('drink-to-choose');

        oneDrinkDiv.innerHTML =
        `
        <input type="radio" name="burger" id="${eachDrink.image}">
        <label for="${eachDrink.image}" - ${eachDrink.price.$numberDecimal} ">
            <img width="100px" src="${eachDrink.image}">
            <strong>${eachDrink.name}</strong>
        </label>
        <p>${eachDrink.description}</p>
        `

        listDrinks.appendChild(oneDrinkDiv)

    });

})



// VERIFICATION QU'UN CHOIX A ETE FAIT

let buttonNext = document.getElementById('button-submit');
let formulaire = document.getElementById('select-your-drink');
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
        window.location.href = '/4desserts.html';    }
    else {
        alert("Merci de sélectionner une de nos rafraîchissantes boissons afin de pouvoir continuer.")
    }

})
