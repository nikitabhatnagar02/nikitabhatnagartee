// JavaScript Document
var bootstrapButton = $.fn.button.noConflict() //return $.fn.button to previously assigned value 
$.fn.bootstrapBtn = bootstrapButton //give $().bootstrapBtn the Bootstrap functionalities

$(document).ready(function () {
  "use strict";
	
  $("#spinner").spinner(),
    $(".paybutton buynowbtn a").button();
  $("a").click(function () {
    window.location.href = 'Personal details.html';
  });
});
