$(document).ready(function () {
  $("body").on("keyup", function(event) {
    if (event.key === "s"){
      var currentCell = $(".active")
      $(currentCell).next().addClass("active");
      currentCell.removeClass("active");
    }else if(event.key === "l"){
      var currentCell = $(".active")
      $(currentCell).prev().addClass("active");
      currentCell.removeClass("active");
    };
    var bg = $("#battleGround")
    if ($(bg.children()[0]).hasClass('active')){
      $("#winner").append("Player 2 wins!");
      $("body").off("keyup");
    }else if($(bg.children()[10]).hasClass('active')){
      $("#winner").append("Player 1 wins!");
      $("body").off("keyup");
    };
  });
});



