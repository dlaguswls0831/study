$(function(){
    var i=0;
    $('.article>.image').click(function(){
        i++;
        var img= $(this).css('background-image');
        $('.thumbView').css('background-image',img);
    });

    $('.acd>li').even().click(function(){
        $('.acd>li').even().css({
            fontSize: '14px',
            lineHeight: '40px',
            fontWeight: '700',
            textTransform: 'uppercase',
            borderTop: '1px solid black'
        });
        $('.acd>li').removeClass('show');
        $(this).addClass('show');
    });
});