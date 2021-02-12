$(() => {
    const showHideEffectDodaj = {
        animate: "fade",
        duration: 200
    }

    const dialogPostavke = {
        modal: true,
        autoOpen: false,
        show: showHideEffectDodaj,
        hide: showHideEffectDodaj,
        draggable: false,
        resizable: false,
        minWidth: 500,
    }

    $("#Kontakt").submit(() => {
        $("#Kontakt").dialog("close");
    })

    $("#odustani").click(() => {
        $("#Kontakt").dialog("close");
    })

    $("#btnKontakt").click(() => {
        $("#Kontakt").dialog("open");
    })

    $("#Kontakt").dialog(dialogPostavke); 
});


