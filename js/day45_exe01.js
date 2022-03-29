$(function(){
    var i=0;
    var len =$('.img>.images').children().length;
    $('.btns>li').eq(0).click(function(){
        i++;
        i = i%len;
        console.log(i);
        // if(i>=5){
            //     i=5
            // }
            $('.images').css('margin-left',i*-100+'%');
            $('.num').find('span').first().text(i+1);
        });
        $('.btns>li').eq(1).click(function(){
            i--;
            console.log(i)
            i = (len + i) % len;
        // if(i<0){
        //     i=0;
        // }
        $('.images').css('margin-left',i*-100+'%');
        $('.num').find('span').first().text(i+1);
    });
    
    $('.aco>li').even().click(function(){
        $('.aco>li').removeClass('on');
        $(this).addClass('on');
    });
    
    // console.log($('.img>.images').children().length);
    $('.num').find('span').last().text($('.img>.images').children().length);
});