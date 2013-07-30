/**
 * jquery.awesomeSortTable.js
 * jQuery plugin, sort html table in an awesome way
 *
 * @author Arnaud Salvucci
 * @copyright MIT License
 * @version 0.0.1
 */
(function ($) {

    $.awesomeSortTable = function(element, options) {

	var defaults = {

	    all:    "Select all",
	    cancel: "Cancel",
	    ok:     "OK",
	    sortAZ: "Sort A-Z",
	    sortZA: "Sort Z-A"
	}


	var plugin = this;

	plugin.settings = {}

	var $element = $(element),
	     element = element;

	plugin.init = function() {

	    plugin.settings = $.extend({}, defaults, options);

	    $element.append('<span><img src="fleche.png" /></span>');


	    var arrow = $element.children('span');

	    arrow.click(function() {

		var cell = $(this).parent('td');

                if ($('#menu').length != 0) {
		    
                    hidePopup();

                } else {

		    var popUp = initPopUp(cell);
		    cell.addClass('selected');
                    displayPopup(cell, popUp);

		    //sort A-Z
		    $('#sortAZ').click(function() {
			var itemList = sortAZ(cell);

			displayTable(itemList, cell)
			hidePopup();
		    });

		    //sort Z-A
		    $('#sortZA').click(function() {
			var itemList = sortZA(cell);

			displayTable(itemList, cell)
			hidePopup();
		    });

		    //click on cancel button
		    $('#cancel').click(function() {

			hidePopup();
		    });
                }
	    });
	}

	var initPopUp = function(cell) {

	    var popUp = '<div id="menu">';

	    popUp += '<p id="sortAZ">'+defaults.sortAZ+'</p>';

	    popUp += '<p id="sortZA">'+defaults.sortZA+'</p>';

	    popUp += '<form action="#" method="post" id="myForm" style="width:'+cell.width()+'px;">';

	    popUp += '<input type="checkbox" value="all" name="all" id="all" /> <label for="all">'+defaults.all+'</label><br />';

	    for (value in getItemList(cell)) {

		popUp += '<input type="checkbox" value="'+getItemList(cell)[value]+'" name="'+getItemList(cell)[value]+'" id="'+getItemList(cell)[value]+'" /><label for="'+getItemList(cell)[value]+'">'+getItemList(cell)[value]+'</label><br />';
	    }

	    popUp += '<input type="button" id="ok" name="ok" value="'+defaults.ok+'" />';

	    popUp += '<input type="button" id="cancel" name="cancel" value="'+defaults.cancel+'" />'

	    popUp += '</form>';

	    popUp += '</div>';

	    return popUp;
	};

	var getItemList = function(cell) {

	    var indexColumn = cell.index() + 1;

	    var itemCellObj = cell.parents('table').find('td:nth-child('+indexColumn+'):gt(0)');

	    var itemListe = [];

	    itemCellObj.each(function () {

		var item = $(this).html();

		if ($.inArray(item, itemListe) == -1) {

		    itemListe.push(item);
		}
	    });

	    return itemListe;
	};

	plugin.init();
    }

    var displayPopup = function(el, popUp) {

	el.append(popUp);

	$('#all').attr('checked', 'true');

    }

    var hidePopup = function() {

	$('#menu').remove();
    }

    var sortAZ = function(cell) {

	return getAllItems(cell).sort();
    }

    var sortZA = function(cell) {

	var list = getAllItems(cell).sort();

	return list.reverse();
    }

    var getAllItems = function(cell) {

	var indexColumn = cell.index() + 1;

	var itemCellObj = cell.parents('table').find('td:nth-child('+indexColumn+'):gt(0)');

	var allItems = [];

	itemCellObj.each(function () {

	    var item = $(this).html();

	    allItems.push(item);
	});

	return allItems;
    }

    var displayTable = function(itemList, cell) {

	var indexColumn = cell.index() + 1;

	for (var i = 0; i < itemList.length; i++) {

	    $('.selected').closest('table').find('tr:gt(0) td:nth-child('+indexColumn+')').each(function() {

		if (itemList[i] == $(this).html()) {
					
		    $('.selected').closest('table').append($(this).parent());	
		}
	    });
	}
    }

    $.fn.awesomeSortTable = function(options) {

	return this.each(function() {

	    if (undefined == $(this).data('awesomeSortTable')) {

		var plugin = new $.awesomeSortTable(this, options);

	        $(this).data('awesomeSortTable', plugin);
	    }

	});
    }
})(jQuery);