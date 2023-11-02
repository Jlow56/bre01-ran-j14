window.addEventListener("DOMContentLoaded", function(){
    let newLien = "ici"
    let newA = newLien.link("https://google.com");
    console.log(newA);
    let newAText = document.createTextNode(newA);
    
    // console.log(newLien)
    // let newAText = document.createTextNode("ici");
    // newA.appendChild(newAText);
    let selectP = document.querySelector("body > p");
    selectP.innerHTML += newA;
 
    
});


// Dans votre JavaScript faites en sorte d'ajouter un lien vers https://google.com 
// à la fin du paragraphe, avec le mot "ici" en guise de lien.
// Description
// La méthode link permet de créer un fragment HTML avec un lien hypertexte. 
// Le chaîne renvoyée par la méthode peut ensuite être ajoutée au document grâce aux méthodes document.write() ou element.innerHTML.