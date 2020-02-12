(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-11').attr('src', (dpi>1) ? 'images/tu-pian-1-276.jpg' : 'images/tu-pian-1-138.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-15').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-17').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-19').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-21').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-23').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-25').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-10')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-24')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-26')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});