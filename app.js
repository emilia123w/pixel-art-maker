var table=$('#pixel_canvas');

function makeGrid() {
  //declare table:
 var table=$('#pixel_canvas');
  table.children().remove();
  //create table
  var rows=$('#input_height').val();
 var cols = $('#input_width').val();
  for(var x=0; x<rows;x++){
    table.append('<tr></tr>');
    for(var y=0; y<cols;y++){
      table.children().last().append('<td></td>')
    }
  }
}
//make the grid:
$("input[type='submit']").click(function(e) {
  e.preventDefault();
  makeGrid()})

//color the grid:

table.on('click', "td", function(){
  var color = $('input[type="color"]').val();
  $(this).css("background-color", color)
})
table.on('dblclick', "td", function(){
 $(this).css("background-color","#afb0b5")
})
     
