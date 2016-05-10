$(document).ready(function(){
   function createBoard(size){
      var squareSize = 500/size;
      for (var j = 0; j < size; j++){
         var row = "<div>";
         for (var i = 0; i < size; i++){
            row += "<div class='square'></div>";
         }
         row += "</div>"
         $("#container").append(row);
      }
      $(".square").css({"height": squareSize, "width": squareSize})
   };

   function changeColor(){
      $(".square").hover(function(){
         $(this).css("background-color", "white");
      });
   };

   createBoard(16);
   changeColor();

   $("#changeButton").click(function(){
      var size = prompt("Please enter the size of board");
      $("#container").empty();
      createBoard(size);
      changeColor();
   });

   $("#resetButton").click(function(){
      $(".square").css("background-color", "blue");
      changeColor();
   })
});
