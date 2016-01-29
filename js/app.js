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
        console.log('mouse down');
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        
        //fire haduken and play haduken sound
    })
    $('.ryu').mouseup(function() {
        console.log('mouse up');
        //return to still position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});