$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        
    })
    $('.ryu').mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    
    $('.ryu').mousedown(function() {
        //fire haduken and play haduken sound
        console.log('mouse down');
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.haduken').show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
        );
    })
    $('.ryu').mouseup(function() {
        //return to still position
        console.log('mouse up'); 
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        
    });
  
});