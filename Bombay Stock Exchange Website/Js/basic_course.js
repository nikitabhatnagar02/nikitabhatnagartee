// JavaScript Document

$(document).ready(function () {
  "use strict";
	
  $("h6").hover(function () {
    $(this).css("font-weight", "bold");
  }, function () {
    $(this).css("font-weight", "normal");
  });
});
