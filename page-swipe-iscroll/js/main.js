requirejs.config({
    // specify our dependencies
    shim: {
        'iscroll': ['jquery'],
        'scroll': ['iscroll']
    }
});

require(["jquery", "iscroll", "scroll", "live"], function($) {
    $(function() {

        // use the requirejs/text plugin to load our html resources.
        // https://github.com/requirejs/text
        require(["text!../html/mansfield_at_the_bay/OEBPS/Text/title_page.xhtml!strip"],
            function(html) {
                $('#pageScroller').append('<div class="page"><div id="mansfield_at_the_bay.OEBPS.Text.title_page.xhtml" class="wrapper"><div class="scroller">' + html + '</div></div></div>');
                updateLayout();
                scrollers.push( new iScroll('mansfield_at_the_bay.OEBPS.Text.title_page.xhtml', {hScrollbar: false, vScrollbar: false, lockDirection: true }) );
            }
        );

        require(["text!../html/mansfield_at_the_bay/OEBPS/Text/chap01.xhtml!strip"],
            function(html) {
                $('#pageScroller').append('<div class="page"><div id="mansfield_at_the_bay.OEBPS.Text.chap01.xhtml" class="wrapper"><div class="scroller">' + html + '</div></div></div>');
                updateLayout();
                scrollers.push( new iScroll('mansfield_at_the_bay.OEBPS.Text.chap01.xhtml', {hScrollbar: false, vScrollbar: false, lockDirection: true }) );
            }
        );

    });
});

