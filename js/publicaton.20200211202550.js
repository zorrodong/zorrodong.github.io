(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-55')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-56')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-57')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-58')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-59')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-60')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-61')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-62')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});