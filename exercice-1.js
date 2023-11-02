window.addEventListener("DOMContentLoaded", function(){
    let newLi = document.createElement("li"); //Créer un élément à partir de sa balise
    let newLiText = document.createTextNode("sucre"); //Lui ajouter du texte
    newLi.appendChild(newLiText);// on insère le texte dans le li
    
    let ul = document.getElementById("ingredients"); // je sélectionne mon ul
    ul.appendChild(newLi); // j'ajoute mon li à la fin de l'ul
});


// Dans votre JavaScript, faites en sorte d'ajouter le sucre à la fin de la liste des ingrédients.