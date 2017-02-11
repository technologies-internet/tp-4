/* la fonction genere <ol> contenant la table des matiere. */
var genererTableDesMatiere = function() {
    var dernierEnfant = function(elem) {
        return elem.childNodes[elem.childNodes.length - 1];
    };
    var creerLien = function(ref, texte) {
        var a = document.createElement("a");
        a.setAttribute("href",ref);
        a.innerHTML = texte;
        return a;
    };
    var insererDansDivAvecId = function(elem,id){
        var div = document.createElement("div");
        div.setAttribute("id",id);
        elem.parentNode.replaceChild(div, elem);
        div.appendChild(elem);
        return div;
    };
    var genererID = (function() {
        var conteur = 0, prefix = "unique_id_";
        return function() {
            conteur++;
            return prefix + conteur;
        };
    })();

    var ajouterAuNiveauAvecId = function(ol, niveau, id, texte) {
        /* La procedure cree un element: <li> <a href="#{{id}}">{{texte}}</a> <o /></li>
         * et l'ajoute a la fin de {{ol}} de niveau {{niveau}}.
         * Par exemple, pour:
         *   {{ol}} = <ol></ol>, {{niveau}} = 1, {{id}} = "mon_id", {{texte}} ="bla bla"
         * la procedure va transformer l'element {{ol}} en:
         *   {{ol}} = <ol><li><a href="#mon_id">bla bla</a><ol></ol></li></ol>. 
         */
        if ((niveau == 1) || (ol.childNodes.length == 0)) {
           var li = document.createElement("li");
           li.appendChild(creerLien("#"+id, texte));
           li.appendChild(document.createElement("ol"));
           ol.appendChild(li);
        } else { /* sinon on fait un appel recursive */
           ajouterAuNiveauAvecId(dernierEnfant(dernierEnfant(ol)), niveau-1, id, texte);
       }
    };

    var tableDesMatiere = document.createElement("ol");

    /* parcourir tous les éléments en ordre et remplir la "tableDesMatiere" */
    var analyserLesElements = function(elem){
       if (/^[H][1-6]$/.test(elem.tagName)){
           var niveau = parseInt(elem.tagName[1],10);
           var id = genererID();
           var div = insererDansDivAvecId(elem,id);
           ajouterAuNiveauAvecId(tableDesMatiere, niveau, id, elem.innerHTML);
       } else for(var i=0; i< elem.childNodes.length; i++)
             analyserLesElements(elem.childNodes[i]);
    };
    analyserLesElements(document.body);
    return tableDesMatiere;
};

