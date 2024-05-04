function lerclientes(){


let requisicao = new XMLHttpRequest();
let url = "https://etec.fernandograciano.com.br/listarcliente.php";
requisicao.open("GET", url);
requisicao.sent();
requisicao.onload = function(){
    console.log(this.response)
}
}


