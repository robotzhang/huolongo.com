$(document).ready(function() {
    //
    var dotted_a = $('.banner .dotted a');
    var banner_li = $('.banner li');
    dotted_a.click(function() {
        var pos = dotted_a.index($(this));
        dotted_a.removeClass('active');
        $(this).addClass('active');
        banner_li.hide();
        banner_li.eq(pos).fadeIn(700);
    });
    //
    var is_pause = false;
    var timer = setInterval(function() {
        if (is_pause) {
            return false;
        }
        var pos = dotted_a.index($('.banner .dotted a.active'));
        pos++;
        if (pos >= dotted_a.length) {
            pos = 0;
        }
        dotted_a.eq(pos).click();
    }, 5000);

    $('.banner').mouseover(function() {
        is_pause = true;
    }).mouseout(function() {
        is_pause = false;
    });
});