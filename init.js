/**
 * jquery.awesomeSortTable.js
 * jQuery plugin, sort html table in an awesome way
 *
 * plugin bootstrap
 *
 * @author Arnaud Salvucci
 * @copyright MIT License
 * @version 0.0.1
 */
$('thead > tr > td').awesomeSortTable({
    all:         "Tout sélectionner",   //label de la checkbox qui permet de tout sélectionner
    cancel:      "Annuler",             //label dubouton annuler
    ok:          "OK",                  //label du bouton OK
    sortAZ:      "Trier par ordre A-Z", //label pour le trie croissant
    sortZA:      "Trier par ordre Z-A"  //label pour le trie décroissant
});