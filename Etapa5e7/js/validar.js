document.querySelector("form")
.addEventListener("submit", (valida) => {

    let nome = document.querySelector("#username").value;  
    
    // expressão regulares para nome
    let testeNome = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    let email = document.querySelector("#email");

    // expressão regular para e-mail
    let testeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

   
    let telefone = document.querySelector("#telefone").value;
    let contador = 0;
    
    //Validando nomes    
    if (nome == "") {
        document.querySelector("#resNome").innerHTML = "Campo obrigatório"

        contador++
    } else if (nome.length < 3) {
        document.querySelector("#resNome").innerHTML = "O Nome precisa ter 3 caracteres"
        contador++;
    } else if (!testeNome.test(nome.value)) {
        document.querySelector("#resNome").innerHTML = "Não é um nome"
        contador++;
    }else if(nome != ""){
        document.querySelector("#resNome").innerHTML = ""
    }
     else {
        contador = 0;
    }
    
    //Validando e-mail
    if (email == "") {
        document.querySelector("#resEmail").innerHTML = "O campo e-mail é obrigatório"
        contador++
    } 
    if (!testeEmail.test(email.value)) {
        document.querySelector("#resEmail").innerHTML = "Não é um e-mail válido"
        contador++
    } 
    else if(email != ""){
        document.querySelector("#resEmail").innerHTML = ""
    }

  
 
    if (telefone.length != 11) {
        document.querySelector("#resTelefone").innerHTML = "11 caracteres"
        contador++
    }
    else if(telefone != ""){
        document.querySelector("#resTelefone").innerHTML = ""
    }

    if (contador > 0){
        
        valida.preventDefault()
        document.querySelector("#res").innerHTML = "O formulário não foi enviado"
    }
}) 