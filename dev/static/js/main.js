$(document).ready(function () {
    svg4everybody({});
    function log(arg) {
        console.log(arg);
    }
    var iconMenu = $('.header-main__icon-content')[0];

    iconMenu.onclick = function()
    {
        var header = $('.header')[0];

        $(header).toggleClass('header_open');
    };

});