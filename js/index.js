

// Manipulation du fetch, intégration des burgers img

const diapo = document.getElementById("diapo");
const response = await fetch("https://titi.startwin.fr/products/type/burger");
const data = await response.json();

for (let i = 0; i < 3; i++) {
    let burger = data[i];
    const img = document.createElement("img");
    img.src = "https://titi.startwin.fr" + burger.image;
    diapo.appendChild(img);
}


