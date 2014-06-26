// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(window).bind('scroll',function(e){
  parallaxScroll();
 });

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-lvl-0').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-lvl-1').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-lvl-2').css('top',(0-(scrolled*.75))+'px');
	$('#parallax-lvl-3').css('top',(0-(scrolled*.9))+'px');
}