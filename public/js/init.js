$(function() {
    var pannel = `<div class="pop-bg"><img src=""></div>`;
    $('body').append(pannel);
    var popPanel = $('.pop-bg');
    var img = popPanel.find('img');
    $('img').on('click', function (e) {
        console.log($(this).eq(0).parent().hasClass('pop-bg'));
        if($(this).eq(0).parent().hasClass('pop-bg')) {
            popPanel.fadeOut();
        } else {
            console.log($(this).eq(0).attr('src'));
            
            var href = $(this).eq(0).attr('src');
            img.eq(0).attr('src', href);
            popPanel.fadeIn();
        }
    })
    
})