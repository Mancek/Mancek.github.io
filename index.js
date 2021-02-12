$(() => {
    var btn = document.getElementById("dialog-btn");
    var dialog = document.getElementById("dialog");

    btn.addEventListener("click", function click() {
        dialog.showModal();
    });
    
    $(".fancy-box").fancybox();   
});