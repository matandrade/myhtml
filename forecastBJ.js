debugger;

var DateTime = new Date();
document.getElementById("dataAgora").innerHTML = "Atualizado em: " + DateTime.getHours() + ":" + DateTime.getMinutes() + "    " + DateTime.getDate() + "/" + (DateTime.getMonth() + 1);

var url = "http://api.openweathermap.org/data/2.5/weather?id=";
var url2 = "http://api.openweathermap.org/data/2.5/forecast?id=";
var idUser = "&APPID=d6ded32163f09eb4ff4a667765b2bc30";
var cities = ['spWeather', 'sjcWeather', 'caraguaWeather', 'bjWeather'];
var cityId = ['3448439', '3448636', '6322184', '3469455'];

document.getElementById("amanhasjc").innerHTML = (DateTime.getDate() + 1) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha1sjc").innerHTML = (DateTime.getDate() + 2) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha2sjc").innerHTML = (DateTime.getDate() + 3) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha3sjc").innerHTML = (DateTime.getDate() + 4) + "/" + (DateTime.getMonth() + 1);
document.getElementById("amanha4sjc").innerHTML = (DateTime.getDate() + 5) + "/" + (DateTime.getMonth() + 1);

var temperature = [];
var hour = [];
var date = [];

var auxFF;
var j = 0;


$.getJSON(url + cityId[1] + idUser, function (data1) {
    var auxW = (data1.main.temp - 273).toFixed(2);
    document.getElementById(cities[1]).innerHTML = auxW + " ºC";
});



$.getJSON(url2 + cityId[1] + idUser, function (data1) {
    data1.list.forEach(element => {
        temperature[j] = (data1.list[j].main.temp - 273).toFixed(2) + " ºC";
        date[j] = (data1.list[j].dt_txt).slice(8, 10);
        hour[j] = (data1.list[j].dt_txt).slice(11, 13);
        if (date[j] == DateTime.getDate() + 1) {
            if (hour[j] == "06") {
                document.getElementById("minSJCamanha").innerHTML = temperature[j];
            }
            if (hour[j] == "15") {
                document.getElementById("maxSJCamanha").innerHTML = temperature[j];
            }
        }
        if (date[j] == DateTime.getDate() + 2) {
            if (hour[j] == "06") {
                document.getElementById("minSJCamanha1").innerHTML = temperature[j];
            }
            if (hour[j] == "15") {
                document.getElementById("maxSJCamanha1").innerHTML = temperature[j];
            }
        }
        if (date[j] == DateTime.getDate() + 3) {
            if (hour[j] == "06") {
                document.getElementById("minSJCamanha2").innerHTML = temperature[j];
            }
            if (hour[j] == "15") {
                document.getElementById("maxSJCamanha2").innerHTML = temperature[j];
            }
        }
        if (date[j] == DateTime.getDate() + 4) {
            if (hour[j] == "06") {
                document.getElementById("minSJCamanha3").innerHTML = temperature[j];
            }
            if (hour[j] == "15") {
                document.getElementById("maxSJCamanha3").innerHTML = temperature[j];
            }
        }
        if (date[j] == DateTime.getDate() + 5) {
            if (hour[j] == "06") {
                document.getElementById("minSJCamanha4").innerHTML = temperature[j];
            }
            if (hour[j] == "15") {
                document.getElementById("maxSJCamanha4").innerHTML = temperature[j];
            }
        }
        j++;
    });

});
