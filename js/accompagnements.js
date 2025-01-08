const listAside = document.getElementById('select-your-aside')


fetch("https://titi.startwin.fr/products/type/accompagnement")
.then(res => res.json())
.then(data => {

    data.forEach(eachburger => {

        let oneAsideDiv = document.createElement('div');
        oneAsideDiv.classList.add('aside-to-choose');

        oneAsideDiv.innerHTML =
        `
        <input type="radio" name="burger" checked id="${eachburger.name}">
        <label for="${eachburger.name}">
            <div class="bg-img"><img src=" ${eachburger.image}"></div>
            <span>${eachburger.name}</span>
        </label>
            <p>
            ${eachburger.description}
            <em>${eachburger.price.$numberDecimal}€</em>
            </p>           `

        listAside.appendChild(oneAsideDiv)
        oneAsideDiv.style.margin = "5px";

    });

    listAside.innerHTML += '<a href="/3boissons-click-collect.html" class="button-type">Suivant</a>'

})