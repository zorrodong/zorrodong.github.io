(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-10').attr('src', (dpi>1) ? 'images/tu-pian-1-222.jpg' : 'images/tu-pian-1-111.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.cont-14').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});