// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// # //= require jquery
// # //= require jquery_ujs
// # //= require turbolinks
// # //= require_tree .

jQuery(document).ready(function(){
  $(window).scroll(function(e){
    parallaxScroll();
    });
 });
function parallaxScroll(){
    console.log("parallaxscroll")
    var scrolled = $(window).scrollTop();
    $('#bg3-1').css('top',(0-(scrolled*.19))+'px');
    $('#bg3-2').css('top',(0-(scrolled*.4))+'px');
    $('#bg3-3').css('top',(0-(scrolled*.75))+'px');
    $('#bg3-4').css('top',(0-(scrolled*.3166))+'px');
		$('#bg1-4').css('top',(0-(scrolled*.1630))+'px');
}
