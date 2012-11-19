document.addEventListener("orientationchange", updateLayout);

// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0;

var myScroll = new iScroll('pageWrapper', {
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true});

updateLayout();

function updateLayout() {

    var currentPage = 0;

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }

    wrapperWidth = $('#pageWrapper').width();
    var pages =$('.page').length;
    $('#pageScroller').css('width', wrapperWidth * pages);
    $('.page').css('width', wrapperWidth - 40);
    myScroll.refresh();
    myScroll.scrollToPage(currentPage, 0, 0);
}

var scrollers = [];
scrollers.push( new iScroll('wrapper2', {hScrollbar: false, vScrollbar: false, lockDirection: true }) );
scrollers.push( new iScroll('wrapper3', {hScrollbar: false, vScrollbar: false, lockDirection: true }) );

$(function() {

    $('.serif').click(function(){
        // Switch stylesheet from sans to serif (i.e. body text)
        $('link[title=sans]')[0].disabled=true;
        $('link[title=serif]')[0].disabled=false;
        setTimeout(function () {
            $.each(scrollers, function() {
                this.refresh();
            });
        }, 0);
    });

    $('.sans').click(function(){
        // Switch stylesheet from serif to sans (i.e. body text)
        $('link[title=sans]')[0].disabled=false;
        $('link[title=serif]')[0].disabled=true;
        setTimeout(function () {
            $.each(scrollers, function() {
                this.refresh();
            });
        }, 0);
    });

    function check_status() {
        var status = navigator.onLine ? 'online' : 'offline';
        if ( status == 'online' ) {
            $('.status').removeClass('offline');
        } else {
            $('.status').removeClass('online');
        }
        $('.status').text(status);
        $('.status').addClass(status);
    }

    // Check online status immediately, instead of waiting for the first setInterval
    check_status();

    // Check online status on a regular interval
    setInterval( check_status, 1000);

});


//fontsize change

$('#psize').on('change', function() {
    var elem = $(this).attr('id').split('size')[0];
    var value = $(this).val();
    $(elem).css('font-size', value + 'px');
    $(this).next('span.value').text(value);
});

$('#psize').on('mouseup touchend', function() {
    setTimeout(function () {
        $.each(scrollers, function() {
            this.refresh();
        });
    }, 0);
});

//line-height change

$('#plh').on('change', function() {
    var elem = $(this).attr('id').split('lh')[0];
    var value = parseFloat($(this).val()).toFixed(2); // keeps the range to outputing two decimal places
    $(elem).css('line-height', $(this).val());
    $(this).next('span.value').text(value);
});

$('#plh').on('mouseup touchend', function() {
    setTimeout(function () {
        $.each(scrollers, function() {
            this.refresh();
        });
    }, 0);
});
