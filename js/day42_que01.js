
          $(function(){
            // 01
            var i=0;
            $('button').eq(0).click(function(){
                i++;
                if(i>=5){
                    i=4;
                }
                $('.artGroup').css('margin-left',i*-100+'%');
                console.log(i);
            });
            $('button').eq(1).click(function(){
                i--;
                if(i<=0){
                    i=0;
                }
                $('.artGroup').css('margin-left',i*-100+'%')
                console.log(i);
            });

            // 02
            $('.paging>li').click(function(){
                $('.paging>li').removeClass('on');
                $(this).addClass('on');
                var ind = $(this).index();
                $('.artGroup02').css('margin-top',ind*-500+'px');
                i=ind
            });
            $('button').eq(2).click(function(){
                i++;
                if(i>=5){
                    i=4;
                }
                $('.artGroup02').css('margin-top',i*-500+'px');
                $('.paging>li').removeClass('on');
                $('.paging>li').eq(i).addClass('on')
            });
            $('button').eq(3).click(function(){
                i--;
                if(i<=0){
                    i=0;
                }
                $('.artGroup02').css('margin-top',i*-500+'px');
                $('.paging>li').removeClass('on');
                $('.paging>li').eq(i).addClass('on')
            });

            // 03
            $('.thumb>div.article').click(function(){
                var img = $(this).css('background-image');
                $('.thunbView').css('background-image',img);
            });
            
            // 04
            $('.thumb04>div.article05').click(function(){
                var ind = $(this).index();
                $('.thumbView04').css('margin-left',ind*-100+'%');
            });
        });