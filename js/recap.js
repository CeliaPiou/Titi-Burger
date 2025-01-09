const html = document.getElementById("recapitulatif-commande");

html.innerHTML =
"<div><strong>Vous avez sélectionné les articles suivants : </strong></div> <div>"
+ localStorage.getItem(`contentBurger`)
+ "</div> <div>"
+ localStorage.getItem(`contentAside`)
+ "</div> <div>"
+ localStorage.getItem(`contentForDrinks`)
+ "</div> <div>"
+ localStorage.getItem(`contentForDessert`)
+ "</div> <div>";


document.querySelectorAll('input[type="radio"]').removeAttribute("type");
input.setAttribute("type", "checkbox")
