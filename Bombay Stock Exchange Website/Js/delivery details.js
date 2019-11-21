// JavaScript Document
$(document).ready(function () {
  "use strict";

  $("select.country").change(function () {
    var selectedCountry = $(".country option:selected").val();
    $.ajax({
      type: "POST",
      url: "/examples/php/process-request.php",
      data: {
        country: selectedCountry
      }
    })
  });

  $("select.state").change(function () {
    var selectedState = $(".state option:selected").val();
    $.ajax({
      type: "POST",
      url: "/examples/php/process-request.php",
      data: {
        country: selectedState
      }
    })
  });
});
