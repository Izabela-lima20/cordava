function salvarLocal(chave, valor)
{

    localStorage.setItem(chave,valor)
    localStorage.setItem("idade" ,34)
    localStorage.setItem("Id_usuario", 105)
    localStorage.setItem("ListaPridutos",["Iphone", "MacBook", "Tesla"])

}
function lerLocal()
{
    console.log(localStorage.getItem("idade"))
    console.log(localStorage.getItem("ListaPridutos"))
    console.log(localStorage.getItem("Id_usuario"))
}