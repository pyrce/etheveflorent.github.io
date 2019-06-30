$(document).ready(function(){
$("#exemples img").click(function() {

    $(".modal").addClass("is-active");  

    var cont=$(this).nextAll(".contenue").html();
  
    $(".modal-content").html(cont) ;


  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });

});