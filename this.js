var rectangle = {hauteur: 10, largeur:20};
var surface = rect => rect.hauteur * rect.largeur; 
// > rectangle.surface()
// 200

// Question: rectangle.surface = function(){ ... };

rectangle.surface = function(){ return surface(this); }
// > rectangle.surface()
// 200
