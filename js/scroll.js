/* buttonHold function focus on thing that is when you press and hold button what will happen. Well fortunately we have mouseup and mousedown event als we have setInterval. there is a plus that setInterval brings to us is you can call setInterval as much as you want within spesific period of time. In case of you click and hold button, mousedown event will be fired. And setInterval will be executed repeatedly in 0.1 milisecond. When we use setInterval we need to clear interval if we want to stop execution. So what i do is to assign setInterval value to interval variable. An suse interval value in clearInterval function. The even i need to use is mouseup. */

var buttonHold = function () {
    var interval;
    $('.down').on('mousedown', function () {
        interval = setInterval(function () {
            var $scrol_pos = $('.counter').scrollTop();
            $(".counter").scrollTop($scrol_pos + 150);
        }, 100)
    });
    $('.down').on('mouseup', function () {
         clearInterval(interval);
    });
       $('.up').on('mousedown', function () {
        interval = setInterval(function () {
            var $scrol_pos = $('.counter').scrollTop();
            $(".counter").scrollTop($scrol_pos - 150);
        }, 100)
    });
    $('.up').on('mouseup', function () {
         clearInterval(interval);
    });
}
buttonHold();
/* for the design that is made here, brings two circumstances. We have maintained firest one already. As second issue we need to take care of "click functionality.*/

/* here scrollTop is verylegit to use. Here there is two thing i do with scrollTop firest get the position of scrollTop and add some value to it*/

/* there is css tricks i do here which is meantioned above
overflow:auto;
overflow-x:hidden;
overflow-y:hidden;
We have scrollbar you didnt see it. */
$('.down').on('click', function () {
    var $scrol_pos = $('.counter').scrollTop();
    $(".counter").scrollTop($scrol_pos + 150);

});
$('.up').on('click', function () {
    var $scrol_pos = $('.counter').scrollTop();
    $(".counter").scrollTop($scrol_pos - 150);

});
