$(() => {
    $('.menu-btn').click(() => {
        $('.menu-list').addClass('active');
        $('.menu-btn').addClass('hide');
    })
    $('.menu-close').click(() => {
        $('.menu-list').removeClass('active');
        $('.menu-btn').removeClass('hide');
    })
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
        minWidth: 450
    }
    
    const statusPostavke = {
        modal: true,
        autoOpen: false,
        show: showHideEffectDodaj,
        hide: showHideEffectDodaj,
        draggable: false,
        resizable: false,
        minWidth: 450,         
        open: function(event, ui){
            setTimeout("$('.statusMessage').dialog('close')",3000);
        }
    }; 
    

    $('#Kontakt').submit(function(e) {
        e.preventDefault();
        SendData();
        ResetData();
        $('#Kontakt').dialog('close');
    })

    $('#odustani').click(() => {
        $('#Kontakt').dialog('close');
    })

    $('#btnKontakt').click(() => {
        $('#Kontakt').dialog('open');
    })

    $('#Kontakt').dialog(dialogPostavke); 

    $('.statusMessage').dialog(statusPostavke); 

    $(".ui-dialog-titlebar").hide();
});

function SendData () {
    const xhr = new XMLHttpRequest();
    xhr.open('get', `${$('#Kontakt').attr('action')}?name=${$('#name').val()}&email=${$('#email').val()}&importance=${$('#importance').val()}&message=${$('#txtNapomena').val()}&newsletter=${$('#newsletter').is(':checked')}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if(xhr.status === 200) {
                $('#statusMessageYes').dialog('open');
            }
            else {
                $('#statusMessageNo').dialog('open');
            }
        }
    }
    xhr.send();
}

function ResetData() {
    $('#name').val("");
    $('#email').val("");
    $('#txtNapomena').val("");
    $('#newsletter').attr("checked", false);
}


