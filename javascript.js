$(document).ready(function(){
    var squares = 16;
    createGrid(squares);
    
    $('#clearButton').click(function(){
        createGrid(clearGrid());
        
        
    });
     function clearGrid(){
        squares = prompt("How many squares per side for the new grid?");
        $('.container').empty();
        return squares;
        };
    function randomColor(){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return hue;
    }
    function createGrid(squares){
        for(i = 0; i < squares; i++){
            $('.container').append('<p />');
		  for(j=0; j < squares; j++){
              $('.container').append("<div class='square'></div>")}
	       }
        $('.square').hover(function(){
        $(this).css('background-color',randomColor());
    });
    }



});



