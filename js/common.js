$(function(){
    $('.hdr').load('../inc/header.html',function(){
        $('h1').click(function(){
            alert(1);
        });
    });
    $('.ftr').load('../inc/footer.html');
});