
document.querySelector("form")
.addEventListener("submit", (valida) => {
   
var professor =[{
    id:0,
    username:'Rubem',
    senha:'coxinha123'
}]


    function teste(){
        let nome = document.querySelector("#username").value;  
        let senha = document.querySelector("#password").value;
        let contador=0;
        nome= nome.toLowerCase();
        

       professor.forEach((item)=>{
        item.username = item.username.toLowerCase();
            if(nome == item.username){
                if(senha!= item.senha){
                    alert("Senha inválido");
                    contador++;
                }
              
               
            }else
            {
                alert("Usuário ou senha inválido ");
                contador++;
                console.log(nome)
                console.log(item.username)
            }
        
            if (contador > 0){
                valida.preventDefault()
                document.querySelector("#res").innerHTML = "O formulário não foi enviado"
              
            }
            })
        }
        teste();
    })