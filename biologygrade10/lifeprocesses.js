$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel1").slideDown("slow");
    });
    $("#panel1").click(function(){
        $("#panel2").slideDown("slow");
    });
    $("#panel2").click(function(){
        $("#panel3").slideDown("slow");
    });
    $("#panel3").click(function(){
        $("#panel4").slideDown("slow");
    });
  });