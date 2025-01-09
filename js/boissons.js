const listDrinks = document.getElementById('select-your-drink')


fetch("https://titi.startwin.fr/products/type/boisson")
.then(res => res.json())
.then(data => {

    let i = 0;
    data.forEach(eachDrink => {

        let oneDrinkDiv = document.createElement('div');
        oneDrinkDiv.classList.add('drink-to-choose');
        i++;

        oneDrinkDiv.innerHTML =
        `
        <input type="radio" name="burger" id="boisson${i}">
        <label for="boisson${i}" - ${eachDrink.price.$numberDecimal} ">
            <div class="bg-img"><img alt="${eachDrink.name}" src="${eachDrink.image}"></div>
            <strong>${eachDrink.name}</strong>
            <em> - ${eachDrink.price.$numberDecimal}€</em>
        </label>
        <p>${eachDrink.description}</p>
        `

        listDrinks.appendChild(oneDrinkDiv);
        oneDrinkDiv.id = `div${i}`
    });

})



// VERIFICATION QU'UN CHOIX A ETE FAIT

let buttonNext = document.getElementById('button-submit');
let i = 0;
let checked = false;
let drinkSelected = "";

let goodDivDrink = "";
let contentHtmlDrink = "";



buttonNext.addEventListener('click', () => {
    checked = false;

    for (let i = 0; i < listDrinks.length; i++) {

        if (listDrinks[i].checked) {
            checked = true;

            drinkSelected = listDrinks[i].id;
            goodDivDrink = document.getElementById(`div${i+1}`);
            contentHtmlDrink = goodDivDrink.innerHTML;
            localStorage.setItem('contentForDrinks', contentHtmlDrink)

            break;
        }
    }

    if (checked) {
        window.location.href = '/4desserts.html';    }
    else {
        alert("Merci de sélectionner une de nos rafraîchissantes boissons afin de pouvoir continuer.")
    }

})
