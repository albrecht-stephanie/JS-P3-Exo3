var changeColor = document.querySelectorAll('div');//sélectionne toutes les div
var text = document.getElementById('text');//selectionne le p par son id

for(i = 0; i < changeColor.length; i++){ //numérote les div de 0 à la fin de l'array avec indentation pour passer de l'une à l'autre
    changeColor[i].addEventListener('click', function(){ // ajout un évènement click sur carré de couleur
        var classcolor = this.className;//donne le contenu de la class de la div
        var color = classcolor.split(' ');// sépare les élements de la class, ici par l'espace entre les mots
        text.style.color = color[1];//application du changement de couleur par le click
        console.log(color[1]);//permet de vérifier dans la console la couleur sélectionnée
    });
}