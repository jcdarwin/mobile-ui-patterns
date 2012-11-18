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
