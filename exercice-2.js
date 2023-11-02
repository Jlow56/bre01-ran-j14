window.addEventListener("DOMContentLoaded", function(){
    let newH2 = document.createElement("h2");
    let newH2Text = document.createTextNode("Le titre de la deuxième section");
    newH2.appendChild(newH2Text);
    
    let section = document.querySelector("body > section:last-of-type");
    section.appendChild(newH2);

    let newParagraphe = document.createElement("p");
    let newParagraphText =  document.createTextNode("Le paragraphe de la deuxième section");
    newParagraphe.appendChild(newParagraphText);
    
    let section2 = document.querySelector("body > section:lastlastChild");
    section2.appendChild(newParagraphe);
    
// Dans votre JavaScript, faites en sorte d'ajouter un titre h2 "Le titre de la deuxième section" 
// puis un paragraphe "Le paragraphe de la deuxième section" à la seconde section.