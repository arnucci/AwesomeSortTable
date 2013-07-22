/**
 * jquery.awesomeSortTable.js
 * jQuery plugin, sort html table in an awesome way
 *
 * @author Arnaud Salvucci
 * @copyright MIT License
 * @version 0.0.1
 */
(function ($) {

    $.fn.awesomeSortTable=function(options) {

        // Default settings
        var defaultsSetting = {
            all:    "Select all",
            cancel: "Cancel",
            ok:     "OK",
            sortAZ: "Sort A-Z",
            sortZA: "Sort Z-A"
        };

        var settings = $.extend(defaultsSetting, options);

	
        return this.each(function() {

            $(this).append('<span><img src="fleche.png" /></span>');

	    var arrow = $(this).children('span');

	    arrow.click(function() {

		cell = $(this).parent('td');

		popUp = initPopUp(cell);

                if ($('#menu').length != 0) {
		    
                    hidePopup(popUp);

                } else {

		    cell.addClass('selected');
                    displayPopup(cell, popUp);
                }
	    });
        });
    };

    function initPopUp(cell) {

	popUp = '<div id="menu">';

	for (value in getItemList(cell)) {

	    popUp += '<input type="checkbox" value="'+getItemList(cell)[value]+'" name="'+getItemList(cell)[value]+'" id="'+getItemList(cell)[value]+'" /><label for="'+getItemList(cell)[value]+'">'+getItemList(cell)[value]+'</label><br />';
	}

	popUp += '</div>';

	return popUp;
    }

    function displayPopup(element, popUp) {

	element.append(popUp);
    }

    function hidePopup(popUp) {

	$('#menu').remove();
    }

    function getItemList(cell) {

	indexColonne = cell.index() + 1;

	itemCellObj = cell.parents('table').find('td:nth-child('+indexColonne+'):gt(0)');

	itemListe = [];

	itemCellObj.each(function () {

	    item = $(this).html();

	    if ($.inArray(item, itemListe) == -1) {

		itemListe.push(item);
	    }
	});

	return itemListe;
    }

})(jQuery);