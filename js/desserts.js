
const dessertList = document.getElementById('select-your-aside')

fetch("https://titi.startwin.fr/products/type/dessert")
.then (response => response.json())
.then (desserts => {

    let i = 0;
    desserts.forEach(dessert => {

        let oneDessert = document.createElement('div');
        oneDessert.classList.add('aside-to-choose');
        i++;

        oneDessert.innerHTML =
        `
        <input type="radio" name="desert" id="dessert${i}">
            <label for="dessert${i}">
                <div class="bg-img"><img src="${dessert.image}" alt="${dessert.name}"></div>
                <span>${dessert.name}</span>
            </label>
            <p>
            ${dessert.description}
            <em>${dessert.price.$numberDecimal}€</em>
            </p>
        `

        dessertList.appendChild(oneDessert)
        oneDessert.style.margin = "5px";

    });
} )



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
        window.location.href = '/5recap-click.html';    }
    else {
        alert("Merci de sélectionner un de nos très bons desserts afin de pouvoir continuer.")
    }

})
