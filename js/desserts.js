
const dessertList = document.getElementById('select-your-aside')

fetch("https://titi.startwin.fr/products/type/dessert")
.then (response => response.json())
.then (desserts => {

    desserts.forEach(dessert => {

        let oneDessert = document.createElement('div');
        oneDessert.classList.add('aside-to-choose');

        oneDessert.innerHTML =
        `
        <input type="radio" name="desert" id="${dessert.name}">
            <label for="${dessert.name}">
                <div class="bg-img"><img src="${dessert.image}"></div>
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

    dessertList.innerHTML +=
    '<a href="/5recap-click.html" class="button-type">Suivant</a>'


} )