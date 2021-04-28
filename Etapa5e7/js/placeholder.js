fetch('https://my-json-server.typicode.com/carllosh1/testeJson/alunos')
.then(response => response.json())
  .then(alunos =>{
    const dadosID = document.getElementById("txtID")
    const procurar = document.querySelector("form")
    const seuID = document.getElementById("seuID").value;
    

    const dadosTurma = document.getElementById("txtID")
        
    const suaTurma = document.getElementById("suaTurma");
 
  

   
    procurar.addEventListener("submit", () => {
    
     
       alunos.forEach( item=> {
            
            if(seuID == item.id){
              
                dadosID.innerHTML = `

                <h2>Seus Dados</h2>
                <p>  Id: ${item.id} </p>
              <p> Nome: ${item.nome} </p>
              <p>  Idade: ${item.idade} </p>
              <p> Turma: ${item.turma} </p>
              <p>  Turno: ${item.turno} </p>
              <p>  Frequência: ${item.frequencia} 
                
                `
             
            }  
           

           alunos.forEach(item => {
                
                if(suaTurma == item.turma){
                    dadosTurma.innerHTML += `
                    <hr>
                        <h2>Dados Turma</h2>
                        Id: ${item.id} <br>
                        Nome: ${item.nome} <br>
                        Idade: ${item.idade} <br>
                        Turma: ${item.turma} <br>
                        Turno: ${item.turno} <br>
                        Frequência: ${item.frequencia} <br>
                    
                    `
                }    
            });
       

     
        })
      
    
})




fetch("https://my-json-server.typicode.com/carllosh1/testeJson/professores")
.then(response => response.json())
.then(professores => {
    const dadosProf = document.getElementById("txtProf")
    
    const seuProf = document.getElementById("seuProf").value;
    procurar.addEventListener("submit", () => {
        professores.forEach(item => {
            if(seuProf == item.nome){
                dadosProf.innerHTML += `
                    Id: ${item.id} <br>
                    Nome: ${item.nome} <br>
                    area: ${item.area} <br>
                    Turma: ${item.turma} <br>
                    Turno: ${item.turno} <br>
            
                
                `
            }   
            
        });
    })
  })
})