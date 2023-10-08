// this document allows the poll button to change to having a smaller black circle on the inside on it, once clicked //

$('.circle').click(function() {
    $(this).parent().find('.circle::after').css('background-color','#EEEEEE');
    $(this).css('background-color', '#000000');
});