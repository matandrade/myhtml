debugger;

var DateTime = new Date();
document.getElementById("dataAgora").innerHTML = "Atualizado em: " + DateTime.getHours() + ":" + DateTime.getMinutes() + "    " + DateTime.getDate() + "/" + (DateTime.getMonth() + 1);

var url = "http://api.openweathermap.org/data/2.5/weather?id=";
var url2 = "http://api.openweathermap.org/data/2.5/forecast?id=";
var idUser = "&APPID=d6ded32163f09eb4ff4a667765b2bc30";
const cities = ['spWeather', 'sjcWeather', 'caraguaWeather', 'bjWeather'];
const cityId = ['3448439', '3448636', '6322184', '3469455'];

document.getElementById("amanha").innerHTML = (DateTime.getDate() + 1) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha1").innerHTML = (DateTime.getDate() + 2) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha2").innerHTML = (DateTime.getDate() + 3) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha3").innerHTML = (DateTime.getDate() + 4) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha4").innerHTML = (DateTime.getDate() + 5) + "/" + (DateTime.getMonth() + 1);

var temperature = [];
var hour = [];
var date = [];

let auxFF;
let i = 0;

$.getJSON(url + cityId[0] + idUser, function (data) {
    let auxW = (data.main.temp - 273).toFixed(2);
    document.getElementById(cities[0]).innerHTML = auxW + " ºC";
});
$.getJSON(url + cityId[1] + idUser, function (data) {
    let auxW = (data.main.temp - 273).toFixed(2);
    document.getElementById(cities[1]).innerHTML = auxW + " ºC";
});
$.getJSON(url + cityId[2] + idUser, function (data) {
    let auxW = (data.main.temp - 273).toFixed(2);
    document.getElementById(cities[2]).innerHTML = auxW + " ºC";
});
$.getJSON(url + cityId[3] + idUser, function (data) {
    let auxW = (data.main.temp - 273).toFixed(2);
    document.getElementById(cities[3]).innerHTML = auxW + " ºC";
});

$.getJSON(url2 + cityId[0] + idUser, function (data) {
    data.list.forEach(element => {
        temperature[i] = (data.list[i].main.temp - 273).toFixed(2) + " ºC";
        date[i] = (data.list[i].dt_txt).slice(8, 10);
        hour[i] = (data.list[i].dt_txt).slice(11, 13);
        if (date[i] == DateTime.getDate() + 1) {
            if (hour[i] == "06") {
                document.getElementById("minSPamanha").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSPamanha").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 2) {
            if (hour[i] == "06") {
                document.getElementById("minSPamanha1").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSPamanha1").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 3) {
            if (hour[i] == "06") {
                document.getElementById("minSPamanha2").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSPamanha2").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 4) {
            if (hour[i] == "06") {
                document.getElementById("minSPamanha3").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSPamanha3").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 5) {
            if (hour[i] == "06") {
                document.getElementById("minSPamanha4").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSPamanha4").innerHTML = temperature[i];
            }
        }
        i++;
    });

});

i=0;

/*
$.getJSON(url2 + cityId[1] + idUser, function (data1) {
    data1.list.forEach(element => {
        temperature[i] = (data1.list[i].main.temp - 273).toFixed(2) + " ºC";
        date[i] = (data1.list[i].dt_txt).slice(8, 10);
        hour[i] = (data1.list[i].dt_txt).slice(11, 13);
        if (date[i] == DateTime.getDate() + 1) {
            if (hour[i] == "06") {
                document.getElementById("minSJCamanha").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSJCamanha").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 2) {
            if (hour[i] == "06") {
                document.getElementById("minSJCamanha1").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSJCamanha1").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 3) {
            if (hour[i] == "06") {
                document.getElementById("minSJCamanha2").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSJCamanha2").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 4) {
            if (hour[i] == "06") {
                document.getElementById("minSJCamanha3").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSJCamanha3").innerHTML = temperature[i];
            }
        }
        if (date[i] == DateTime.getDate() + 5) {
            if (hour[i] == "06") {
                document.getElementById("minSJCamanha4").innerHTML = temperature[i];
            }
            if (hour[i] == "15") {
                document.getElementById("maxSJCamanha4").innerHTML = temperature[i];
            }
        }
        i++;
    });

});

*/


/*
$.getJSON(url + cityId[1] + idUser, function (data) {
    aux = data.main.temp - 273;
    console.log(aux);
    document.getElementById(cities[1]).innerHTML = aux.toFixed(2) + " ºC";
});

$.getJSON(url + cityId[2] + idUser, function (data) {
    aux = data.main.temp - 273;
    console.log(aux);
    document.getElementById(cities[2]).innerHTML = aux.toFixed(2) + " ºC";
});

$.getJSON(url + cityId[3] + idUser, function (data) {
    aux = data.main.temp - 273;
    console.log(aux);
    document.getElementById(cities[3]).innerHTML = aux.toFixed(2) + " ºC";
});

*/

