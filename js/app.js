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
        //console.log('mouse down');
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
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
        
    })
    $(document).keydown(function(event) {
        //x = key 88
        //trying to make it so that pressing the x works if the mouse is in the div or not.
        if((event.which == 88) && ($('.ryu').mouseenter == true)){
            console.log('x down');
            //$('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
        else {
            $('.ryu-still').show();
        }
    })
    $(document).keyup(function(event) {
        if(event.which == 88) {
            console.log('x up');
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        }
    });
  
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}