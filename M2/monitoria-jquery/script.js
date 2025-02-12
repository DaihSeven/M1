/*
//CÓDIGO MONITORIA
$(document).ready(() =>{
    $("#fazer").click((event) => {
    event.preventDefault();

let valorDoInput = $("#input1").val(); //Pegar o valor do input

$.ajax({
    url: 'https://viacep.com.br/ws/${valorDoInput}/json/',
    type: "GET",

success: function (data) {
  console.log("Dados recebidos:", data);
  $("#dados").html(data.bairro); //Alterar html de um elemento
},
error: function (xhr, status, error) {
  console.error("Erro na requisição:", error);
},
});
});
});
*/
//CÓDIGO REFORMULADO

$(document).ready(() => {
    $("#fazer").click((event) => {
        event.preventDefault();

        let valorDoInput = $("#input1").val(); // Pegar o valor do input

        $.ajax({
            url: `https://viacep.com.br/ws/${valorDoInput}/json/`, // Corrigi a interpolação de string
            type: "GET",
            success: function (data) {
                console.log("Dados recebidos:", data);
                $("#dados").html(
                    `<p>CEP: ${data.cep}</p>
                     <p>Bairro: ${data.bairro}</p>
                     <p>Logradouro: ${data.logradouro}</p>
                     <p>Complemento: ${data.complemento}</p>
                     <p>Localidade: ${data.localidade}</p>
                     <p>UF: ${data.uf}</p>`
                ); // Alterar html de um elemento
            },
            error: function (xhr, status, error) {
                console.error("Erro na requisição:", error);
            },
        });
    });
  });