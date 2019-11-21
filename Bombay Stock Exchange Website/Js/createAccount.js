// JavaScript Document
$(document).ready(function () {
  "use strict";
	
  $(".submitbtn").click(function () {
    $("#myForm").submit(); // Submit the form
    document.location.href = "login successful.html";
  });
});
