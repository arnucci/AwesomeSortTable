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
        });
    };

})(jQuery);
