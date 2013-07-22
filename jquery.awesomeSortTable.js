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

	var test = initPopUp();

        return this.each(function() {

            $(this).append('<span><img src="fleche.png" /></span>');

	    var arrow = $(this).children('span');

	    arrow.click(function() {

                if ($('#menu').length != 0) {

                    hidePopup(arrow, test);

                } else {

		    cellule = $(this).parent('td');
                    displayPopup(cellule, test);
                }
	    });
        });
    };

    function initPopUp() {

	popUp = '<div id="menu">Coucou</div>';

	return popUp;
    }

    function displayPopup(element, popUp) {

	element.append(popUp);
    }

    function hidePopup(element, popUp) {

	$('#menu').remove();
    }

})(jQuery);
