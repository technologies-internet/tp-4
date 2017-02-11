/* La fonction indexe le document pour les mots du tableau 'arr' et
   elle retourne un element <div> de la table d'indexes */
function indexer(arr) {
    var refs = {};
    for(var i=0; i<arr.length; i++)
        if (arr[i] && arr[i].length > 0)
            refs[arr[i]] = [];
    var marker = (function() {
        var counter = 0;
        return function(texte) {
            var id = "inDeX_" + (counter++);
            refs[texte].push(id);
            return '<span id="' + id + '" style="background-color:yellow;">' + texte + '</span>';
        };
    })();

    var visiterLesElements = function(elem) {
        if (elem.tagName === "SCRIPT") return;
        if (elem.tagName === "STYLE") return;
        if (elem.nodeType === 3) { //TEXT_NODE
            htmlText = elem.nodeValue;
            for(var key in refs)
                htmlText = htmlText.replace(new RegExp(key, "g"), marker);
            var span = document.createElement("span");
            span.innerHTML = htmlText;
            elem.parentNode.replaceChild(span, elem);
        } else {
            for(var i=0; i< elem.childNodes.length; i++)
                visiterLesElements(elem.childNodes[i]);
        }
    };

    /* calculer l'objet "refs" */
    visiterLesElements(document.body);

    /* mettre la table d'indexes dans un élément <div> */
    var listeDeLiensHTML = function(idArray) {
        var res = "";
        for(var i=0; i< idArray.length; i++)
            res += '&nbsp;<a href="#' + idArray[i] + '">' + (i+1) + '</a>';
        return res;
    };

    var divHTML = "";
    for(var key in refs){
        if (refs[key].length > 0)
            divHTML += "<div>"+key+":"+listeDeLiensHTML(refs[key])+"</div>";
    }
    var div = document.createElement("div");
    div.innerHTML=divHTML;
    return div;
}

