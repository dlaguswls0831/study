// 1번문제
$(function(){
    $('.acrod>li').first().css('background-color','yellow');
    $('.acrod>li').even().click(function(){
        $('.acrod>li').even().css({
            textAlign: 'center',
            height: '40px',
            backgroundColor: '#ccc',
            fontSize: '20px',
            lineHeight: '40px'
        });
        $(this).css('background-color','yellow');
        $('.acrod>li').removeClass('show');
        $(this).addClass('show');
    });
    // 2번
    var i=0;
    var j=0;
    $('button').eq(0).click(function(){
        i++;
        j++;
        if(i>9){
            i=9
        }
        if(j>=9){
            $(this).css('opacity','0');
        }
        console.log(j)
        $('button').eq(1).css('opacity','1');
        $('.artGroup').css('margin-left',i*-33.333+'%');
    });
    $('button').eq(1).click(function(){
        i--;
        j--;
        if(i<0){
            i=0
        }
        if(j<=0){
            $(this).css('opacity','0');
        }
        $('button').eq(0).css('opacity','1');
        $('.artGroup').css('margin-left',i*-33.333+'%');
    });
    // 3번
    $('.paging>li').click(function(){
        $('.paging>li').removeClass('on');
        $(this).addClass('on');
        var ind=$(this).index();
        $('.artGroup02').css('margin-left',ind*-100+'%');
        i=ind;
    });
    $('button').eq(2).click(function(){
        i++;
        if(i>=4){
            i=4
        }
        $('.artGroup02').css('margin-left',i*-100+'%');
        $('.paging>li').removeClass('on');
        $('.paging>li').eq(i).addClass('on');
    });
    $('button').eq(3).click(function(){
        i--;
        if(i<=0){
            i=0
        }
        $('.artGroup02').css('margin-left',i*-100+'%');
        $('.paging>li').removeClass('on');
        $('.paging>li').eq(i).addClass('on');
    });
    // 4번
    $('.View03>.paging03>li').click(function(){
        $('.View03>.paging03>li').removeClass('on');
        $(this).addClass('on');
        var ind = $(this).index();
        $('.View03>.artGroup03').css('margin-top',ind*-200+'px');
        i=ind;
    });
    $('button').eq(4).click(function(){
        i++;
        if(i>3){
            i=3;
        }
        $('.artGroup03').css('margin-top',i*-200+'px');
        $('.View03>.paging03>li').removeClass('on')
        $('.View03>.paging03>li').eq(i).addClass('on')
    });
    $('button').eq(5).click(function(){
        i--;
        if(i<0){
            i=0;
        }
        $('.artGroup03').css('margin-top',i*-200+'px');
        $('.View03>.paging03>li').removeClass('on')
        $('.View03>.paging03>li').eq(i).addClass('on')
    });
});
