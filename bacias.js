function bacias() {
    debugger;

    var url = "http://tr.ons.org.br/Content/Get/SituacaoDosReservatorios" ;
    
    $.getJSON(url, function (data) {
        debugger;
        
        console.log(data.length)

        console.log(data[36].Reservatorio);

        var lastup = data[36].Data;

        document.getElementById("lastUpdate").innerHTML = lastup.slice(8,10)+"-"+lastup.slice(5,7)+" "+lastup.slice(0,4) ;
        document.getElementById("nivel").innerHTML = (data[36].ReservatorioValorUtil + " %");


    });
}


// forecast http://api.openweathermap.org/data/2.5/forecast?id=3469455&APPID=d6ded32163f09eb4ff4a667765b2bc30

// bom jardim 3469455

// caragua 6322184

// sao jose 3448636

// sao paulo 3448439

