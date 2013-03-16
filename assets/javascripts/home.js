$(document).ready(function() {
    var index = 0;
    setInterval(function() {
        var width = $('.banner li').eq(index).width();
        $('.banner li').eq(index).fadeOut(function() {
            index++;
            if (index >= $('.banner li').length) {
                index = 0;
            }
            $('.banner li').eq(index).fadeIn();
        });
    }, 2000);
});