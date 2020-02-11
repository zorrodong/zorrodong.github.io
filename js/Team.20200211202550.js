(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-39').attr('src', (dpi>1) ? 'images/tu-pian-1-276.jpg' : 'images/tu-pian-1-138.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-43').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-45').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-47').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-49').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-51').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');
$('.js-53').attr('src', (dpi>1) ? 'images/placeholder-276.png' : 'images/placeholder-138.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-32')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-33')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-34')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-35')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-36')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-37')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-38')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-40')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-42')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-44')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-46')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-48')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-50')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-52')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-54')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});