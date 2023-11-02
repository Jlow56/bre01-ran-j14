window.addEventListener("DOMContentLoaded", function(){
    
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    
    // Je parcour mon tableau 
    pokemons.forEach((element) => console.log(element)); 
    
    // Je créer mon ul
    let newUl = document.createElement("ul");
    let selectBody = document.querySelector("body");
    selectBody.appendChild(newUl);
    
    // Je crée mes LI
    let newLi = document.createElement("li");
    let selectionUl = document.querySelector("body ul");
    newUl.appendChild(newLi);
    
    // J'ajoute mes élément tableau à mes li 
    for (newUl === "";element < 0 count (newul) element ++){
    let addPokemons = document.createTextNode(pokemons)
    selectionUl.appendChild(addPokemons);
    }
});

// Utilisez le tableau de pokemons en JavaScript pour afficher une liste non ordonnées (ul) des pokemons du tableau dans le HTML.