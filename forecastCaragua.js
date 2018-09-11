debugger;

var DateTime = new Date();
document.getElementById("dataAgora").innerHTML = "Atualizado em: " + DateTime.getHours() + ":" + DateTime.getMinutes() + "    " + DateTime.getDate() + "/" + (DateTime.getMonth() + 1);

var url = "http://api.openweathermap.org/data/2.5/weather?id=";
var url2 = "http://api.openweathermap.org/data/2.5/forecast?id=";
var idUser = "&APPID=d6ded32163f09eb4ff4a667765b2bc30";
var cities = ['spWeather', 'sjcWeather', 'caraguaWeather', 'bjWeather'];
var cityId = ['3448439', '3448636', '6322184', '3469455'];

document.getElementById("amanhacr").innerHTML = (DateTime.getDate() + 1) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha1cr").innerHTML = (DateTime.getDate() + 2) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha2cr").innerHTML = (DateTime.getDate() + 3) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha3cr").innerHTML = (DateTime.getDate() + 4) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha4cr").innerHTML = (DateTime.getDate() + 5) + "/" + (DateTime.getMonth() + 1);

var temperature = [];
var hour = [];
var date = [];

var auxFF;
var k = 0;


$.getJSON(url + cityId[2] + idUser, function (data1) {
    var auxW = (data1.main.temp - 273).toFixed(2);
    document.getElementById(cities[2]).innerHTML = auxW + " ºC";
});



$.getJSON(url2 + cityId[2] + idUser, function (data2) {
    data2.list.forEach(element => {
        temperature[k] = (data2.list[k].main.temp - 273).toFixed(2) + " ºC";
        date[k] = (data2.list[k].dt_txt).slice(8, 10);
        hour[k] = (data2.list[k].dt_txt).slice(11, 13);
        if (date[k] == DateTime.getDate() + 1) {
            if (hour[k] == "06") {
                document.getElementById("minCRamanha").innerHTML = temperature[k];
            }
            if (hour[k] == "15") {
                document.getElementById("maxCRamanha").innerHTML = temperature[k];
            }
        }
        if (date[k] == DateTime.getDate() + 2) {
            if (hour[k] == "06") {
                document.getElementById("minCRamanha1").innerHTML = temperature[k];
            }
            if (hour[k] == "15") {
                document.getElementById("maxCRamanha1").innerHTML = temperature[k];
            }
        }
        if (date[k] == DateTime.getDate() + 3) {
            if (hour[k] == "06") {
                document.getElementById("minCRamanha2").innerHTML = temperature[k];
            }
            if (hour[k] == "15") {
                document.getElementById("maxCRamanha2").innerHTML = temperature[k];
            }
        }
        if (date[k] == DateTime.getDate() + 4) {
            if (hour[k] == "06") {
                document.getElementById("minCRamanha3").innerHTML = temperature[k];
            }
            if (hour[k] == "15") {
                document.getElementById("maxCRamanha3").innerHTML = temperature[k];
            }
        }
        if (date[k] == DateTime.getDate() + 5) {
            if (hour[k] == "06") {
                document.getElementById("minCRamanha4").innerHTML = temperature[k];
            }
            if (hour[k] == "15") {
                document.getElementById("maxCRamanha4").innerHTML = temperature[k];
            }
        }
        k++;
    });

});
