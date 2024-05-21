function consultaCep() {
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function () {

        let objetoCEP = JSON.parse(requisicao.response)
        let CampoEndereço = document.querySelector("#cidade")
        let Campocomplemento = document.querySelector("#complemento")
        let CampoBairro = document.querySelector("#bairro")
        let Campolocalidade = document.querySelector("#endereco")
        let Campoestado = document.querySelector("#estado")

        console.log(requisicao.response)

        CampoEndereço.value = objetoCEP.logradouro
        CampoBairro.value = objetoCEP.bairro
        Campocomplemento.value = objetoCEP.complemento
        Campolocalidade.value = objetoCEP.localidade
        Campoestado.value = objetoCEP.uf


    }
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", consultacep);