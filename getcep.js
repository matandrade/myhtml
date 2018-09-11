function PreencheCEP() {
    debugger;
    var insertedCEP = document.getElementById("cep").value;
    if (insertedCEP != null) {
        if (insertedCEP.length === 8 || (insertedCEP.length === 9 && insertedCEP[5] === "-")) {
            var url = "https://viacep.com.br/ws/" + insertedCEP + "/json";
            jQuery.support.cors = true;
            $.getJSON(url, function (data) {

                document.getElementById("uf").innerHTML = (data.uf);
                document.getElementById("cidade").innerHTML = (data.localidade);
                document.getElementById("bairro").innerHTML = (data.bairro);
                document.getElementById("rua").innerHTML = (data.logradouro);

            });
        }
        else {
            document.getElementById("uf").innerHTML = ("");
            document.getElementById("cidade").innerHTML = ("");
            document.getElementById("bairro").innerHTML = ("");
            document.getElementById("rua").innerHTML = ("");
        }

    }
}