$(() => {

    $("#aside-nav-1").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#css-main").offset().top - 100 }, 50);
    });
    $("#aside-nav-2").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#animations").offset().top - 100 }, 50);
    });
    $("#aside-nav-3").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#calculations").offset().top - 100 }, 50);
    });
    $("#aside-nav-4").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#gradients").offset().top - 100 }, 50);
    });
    $("#aside-nav-5").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#fonts").offset().top - 100 }, 50);
    });
    $("#aside-nav-6").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#borders").offset().top - 100 }, 50);
    });
    $("#aside-nav-7").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#queries").offset().top - 100 }, 50);
    });
});