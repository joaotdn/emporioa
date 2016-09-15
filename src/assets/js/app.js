$(document).foundation();

var bannerBg = function (element) {
    if(element == 'undefined')
        return false;

    $('*[data-banner]',element).each(function (i) {
        var bg = $(this).data('banner');
        $(this).css('background-image','url('+ bg +')');
    });
};

(function($) {
    bannerBg('#main-slider');

    /**
     * Menu mobile
     */
    $('#mo-menu').perfectScrollbar();

    // show-hide
    $('*[data-toggle-offcanvas]').on('click',function (e) {
        e.preventDefault();
        $('body, .wrap, .close-menu, #mo-menu').toggleClass('active');
    });

    //login
    $('ul','#header-bar').clone().appendTo('#mo-menu')
        .addClass('mo-login')
        .removeClass('float-right');

    //menu produtos
    $('div','#menu-products').clone().appendTo('#mo-menu')
        .addClass('off-menu');

    $('.column','#footer-menus').clone().appendTo('#mo-menu')
        .addClass('off-menu')
        .removeClass('column');

})(jQuery);
