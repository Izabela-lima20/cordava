function consultacep()
{
    let campo= document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+campo.value+"/json/";
    requisicao.open("GET" , url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
        let CampoEndereço = document.querySelector("#logradouro")
        let Campocomplemento = document.querySelector("#complemento")
        let CampoBairro = document.querySelector("#Bairro")
        let Campolocalidade = document.querySelector("#localidade")
    


        alert(objetoCEP.uf + " - "+ objetoCEP.localidade)



        CampoEndereço.value = objetoCEP.logradouro
        CampoBairro.value = objetoCEP.bairro
        Campocomplemento.value = objetoCEP.complemento
        Campolocalidade.value = objetoCEP.localidade
    

    }
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", consultacep);