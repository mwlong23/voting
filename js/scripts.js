$(document).ready(function(){
  var age= parseInt(prompt("How old are you?"));

  if (age>= 18){
    $("#voting-age").show();
  } else{
    $("#not-voting-age").show();
  }
});
