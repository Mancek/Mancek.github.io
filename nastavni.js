$(() => {
    $("table").on('click','#deleteKolegij',function(){
        $(this).closest('tr').remove();
        SumECTS();
        SumSati();
     });
});

const xhr = new XMLHttpRequest();
let KolegijData;
let ActiveKolegij;
xhr.open('get', 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        FillData(JSON.parse(xhr.responseText));
    }
}
xhr.send();

function FillData(data) {
    $('#txtKolegiji').autocomplete({ source: data.map(x => x.label) });
    KolegijData = data;
}

$('#txtKolegiji').on('change', function() {
    const xhrkolegij = new XMLHttpRequest();
    const id = KolegijData.find(x => x.label === $("#txtKolegiji").val()).value;
    xhrkolegij.open('get', `http://www.fulek.com/VUA/SUPIT/GetKolegij/${id}`);
    xhrkolegij.onreadystatechange = function () {
        if (xhrkolegij.readyState === 4 && xhrkolegij.status === 200) {
            ShowData(JSON.parse(xhrkolegij.responseText));
        }
    }
    xhrkolegij.send();
});


function ShowData(element) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML += `
    <tr>
        <td>${element.kolegij}</td>
        <td>${element.ects}</td>
        <td>${element.sati}</td>
        <td>${element.predavanja}</td>
        <td>${element.vjezbe}</td>
        <td>${element.tip}</td>
        <td>${element.semestar}</td>
        <td><button id="deleteKolegij">Obriši</button></td>
    </tr>`;
    SumECTS();
    SumSati();
}

function SumECTS() {
    var total = 0;
    $('tbody tr').each(function() {
        total += +$('td', this).eq(1).text(); //+ will convert string to number
    });
    $('table tfoot td').eq(1).text(total);
}


function SumSati() {
    var total = 0;
    $('tbody tr').each(function() {
        total += +$('td', this).eq(2).text(); //+ will convert string to number
    });
    $('table tfoot td').eq(2).text(total);
}
/*
function calculateColumn(index) {
    var total = 0;
    $('table tr').each(function() {
        var value = parseInt($('td', this).eq(index).text());
        if (!isNaN(value)) {
            total += value;
        }
    });
    $('table tfoot td').eq(index).text('Total: ' + total);
}*/