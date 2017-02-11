# Travaux pratiques (séance 4)

## Génération de la table des matières d'un document HTML pour `h1`, `h2`,... `h6`.

  Étant donné un document HTML représentant, par exemple, un article
  scientifique organisé en chapitres (`h1`) et sous-chapitres
  `h2`...`h6`, proposez une fonction javascript (à insérer dans le
  document) qui produit automatiquement la table des matières du
  document avec des hyperliens (`a`).

## Indexation d'un document HTML selon une liste de mots donnés.

  Écrivez une fonction Javascript `indexer()`, qui prend comme
  argument une liste de mots, et qui, si appelée dans le contexte d'un
  document HTML, va générer à la fin du document la liste de mots avec
  des hyperliens <a> vers les occurrences de ces mots dans le
  document.


    <body>
    ....
      <script>
        indexer(["Turing", "Tarski", "Church", "Milner", "Curry","Tarjan"]);
      </script>
    </body>
