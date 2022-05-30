$(document).ready(function(){
$("#exemples img").click(function() {

    $(".modal").addClass("is-active");  

    var cont=$(this).nextAll(".contenue").html();
  
    $(".modal-content").html(cont) ;


  });

  $("#cv").click(function() {
console.log("mon cv")
    $(".modal").addClass("is-active");  

    var cont=$(this).nextAll(".contenue").html();
  
    $(".modal-content").html(cont) ;
    $(".modal-content").css("display","block")

  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });

});