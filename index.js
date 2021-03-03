$(() => {
    var btn = document.getElementById("dialog-btn");
    var dialog = document.getElementById("dialog");

    btn.addEventListener("click", () => {
        dialog.showModal();
    });

    $("#aside-nav-1").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#html-main").offset().top - 100 }, 50);
    });
    $("#aside-nav-2").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#html-5-0").offset().top - 100 }, 50);
    });
    $("#aside-nav-3").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-syntax").offset().top - 100 }, 50);
    });
    $("#aside-nav-4").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-semantic").offset().top - 100 }, 50);
    });
    $("#aside-nav-5").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-input").offset().top - 100 }, 50);
    });
    $("#aside-nav-6").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-audio-video").offset().top - 100 }, 50);
    });
    $("#aside-nav-7").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#html-5-1").offset().top - 100 }, 50);
    });
    $("#aside-nav-8").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#picture-srcset").offset().top - 100 }, 50);
    });
    $("#aside-nav-9").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-input-52").offset().top - 100 }, 50);
    });
    $("#aside-nav-10").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#summary-details").offset().top - 100 }, 50);
    });
    $("#aside-nav-11").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#html-5-2").offset().top - 100 }, 50);
    });
    $("#aside-nav-12").click(() => {
        $([document.documentElement, document.body]).animate( {
            scrollTop: $("#new-dialog").offset().top - 100 }, 50);
    });

    $(".fancy-box").fancybox();   
});