//fetch("https://titi.startwin.fr/products/type/burger")
//.then(res => res.json())
//.then(data => {
//})

const diapo = document.getElementById("diapo");
const response = await fetch("https://titi.startwin.fr/products/type/burger");
const data = await response.json();



for (let i = 0; i < 3; i++) {
    let burger = data[i];
    console.log(burger);
    const img = document.createElement("img");
     img.src = "https://titi.startwin.fr" + burger.image;
     diapo.appendChild(img);
 }

