// 로딩이라는 거 자체가 html자체를 탐색하지만 해더에 대한 정보가 없어서
// 해더안에 들어있는 요소의 돔탐색은 아직 되지 않은 상태이기때문에
// 로드로 한번 읽어서 거기에 펑션함수를 넣어야 액션을 넣을 수 있다
// 돔(DOM)은 문서라서 정확하게 탐색해줘야 한다
$(function(){
    $('.hdr').load('../inc/header.html',function(){
        // 각 위치를 넣어줄 방을 생성한다.
        var loc = [];
        var ind = 0;
            for(var i=0; i<$('body>div').length; i++){
                // console.log($('body>div')[i]);
                loc[i]=$('body>div').eq(i).offset().top;
            }
            // console.log($('body>div'))
            console.log(loc);
        $('.hdrLeft>nav>h4').click(function(){
           ind=$(this).index();
           console.log(ind);
           $('html').animate({scrollTop:loc[ind]});
        });
    });
    $('.ftr').load('../inc/footer.html');
    // 자바스크립트는 빨리 처리할수있는 요소의 액션은 묶어서 처리하고
    // 비동기절차가 되는 액션도 있다.
});