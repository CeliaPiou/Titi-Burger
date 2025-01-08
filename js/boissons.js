const listDrinks = document.getElementById('select-your-drink')


fetch("https://titi.startwin.fr/products/type/boisson")
.then(res => res.json())
.then(data => {

    data.forEach(eachDrink => {

        let oneDrinkDiv = document.createElement('div');
        oneDrinkDiv.classList.add('drink-to-choose');

        oneDrinkDiv.innerHTML =
        `
        <input type="radio" name="burger" checked id="${eachDrink.id}">
        <label for="${eachDrink.id}" - ${eachDrink.price.$numberDecimal} ">
            <img width="100px" src="${eachDrink.image}">
            <strong>${eachDrink.name}</strong>
        </label>
        <p>${eachDrink.description}</p>
        `

        listDrinks.appendChild(oneDrinkDiv)

    });

    listDrinks.innerHTML += '<a href="/4desserts.html" class="button-type">Suivant</a>'

})