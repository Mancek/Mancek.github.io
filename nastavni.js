$(() => {
    $('table').on('click','#deleteKolegij', function() {
        let removedrow = $(this).closest('tr');
        removedrow.remove();
        SumECTS(-$('td', removedrow).eq(1).text());
        SumSati(-$('td', removedrow).eq(2).text());
     });
});

const xhr = new XMLHttpRequest();
let KolegijData;
let ActiveKolegij;
let SUMECTS = 0;
let SUMSati = 0;
xhr.open('get', 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan');
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        FillData(JSON.parse(xhr.responseText));
    }
}
xhr.send();

function FillData(data) {
    $('#txtKolegiji').autocomplete({ source: data.map(x => x.label) });
    KolegijData = data;
}

$('#txtKolegiji').on('change', () => {
    const xhrkolegij = new XMLHttpRequest();
    const id = KolegijData.find(x => x.label === $('#txtKolegiji').val()).value;
    xhrkolegij.open('get', `http://www.fulek.com/VUA/SUPIT/GetKolegij/${id}`);
    xhrkolegij.onreadystatechange = () => {
        if (xhrkolegij.readyState === 4 && xhrkolegij.status === 200) {
            ShowData(JSON.parse(xhrkolegij.responseText));
        }
    }
    xhrkolegij.send();
    $('#txtKolegiji').val("");
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
    SumECTS(element.ects);
    SumSati(element.sati);
}

function SumECTS(number) {
    SUMECTS += number;
    $('table tfoot td').eq(1).text(SUMECTS);
}


function SumSati(number) {
    SUMSati += number;
    $('table tfoot td').eq(2).text(SUMSati);
}