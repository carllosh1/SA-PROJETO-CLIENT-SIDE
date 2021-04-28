const itens =[

    {
        id:0,
        curso: "Técnico de Informática",
        img: "img/page1.png",
        
        amount: 0,
        price: 499.99,
        duracao: 1420,
        turno:"Manhã",
        entrada:600.00
    },
    {
        id:1,
        curso: "Técnico em Administração",
        img: "img/page6.png",
       
        amount: 0,
        price: 399.99,
        duracao: 1140,
        turno:"Manhã",
        entrada:500.00
    },
    {
        id:2,
        curso: "Técnico de Segurança da Informação",
        img: "img/page5.png",
       
        amount: 0,
        price: 359.99,
        duracao:980,
        turno:"Manhã",
        entrada:460.00
    },
    {
         id:3,
        curso: "Técnico de Segurança no trabalho",
        img: "img/page2.png",
        
        amount: 0,
        price: 299.99,
        duracao: 1140,
        turno:"Manhã"
        ,
        entrada:400.00
    },
    {
        id:4,
       curso: "Técnico em Meio Ambiente",
       img: "img/page4.png",
       
       amount: 0,
       price: 189.99,
       duracao: 850,
       turno:"Manhã",
       entrada:290.00
   },
    {
        id:5,
        curso: "Técnico em Enfermagem",
        img: "img/page3.png",
        
        amount: 0,
        price: 299.99,
        duracao: 1240
        , turno:"Manhã"
        ,
        entrada:400.00
    },

    ]

    function carrinho(){
        let loja =document.querySelector("#aqui");

        itens.forEach((item)=>{
            loja.innerHTML +=`
           
           
            <div class="card mb-3 text-center" style="width: 22rem;">
           
                <img src="${item.img}" class="card-img-top" style=""; alt="...">
               
                <div class="card-body">
                <h5 class="card-title">${item.curso}</h5>
                
                <p class="card-text">Duração: <strong>${item.duracao}H</strong></p>
                <p class="card-text">Turno: ${item.turno}</p>
                <p class="card-text" > Entrada:<span id="text-price">R$${item.entrada.toFixed(2)} </p>
                <p class="card-text" > de <span id="text-price">R$${item.price.toFixed(2)}/mensal</p>
                
                <a href="#carrinho" class="add btn btn-success" key="${item.id}"> <i class="fas fa-shopping-basket"></i>  Coloque na cesta</a>
                </div>
            </div>
       
            `

        })
    }
    carrinho();

    carregarCarrinho = () => {
       let textCarrinho = document.querySelector("#carrinho");
       let textTotal = document.querySelector("#total");
       let borda = document.querySelector(".carrinhoItens");
       
       textCarrinho.innerHTML = `  <h2><i class="fas fa-shopping-basket"></i>Cesta</h2>`
        let total=0, subtotal=0, entrada=0;
       itens.forEach((item) => {
           
        if(item.amount > 0) {
            subtotal =item.price*item.amount;
            
            textCarrinho.innerHTML += `
            
            <p>${item.curso} | Quantidade: ${item.amount} | Preço: R$ ${(subtotal).toFixed(2)}</P>

            <hr>
            `;
            total +=subtotal;
            entrada +=item.entrada;
        }
        
         })

        borda.style.border = "1px solid black";
       
       
            textTotal.innerHTML = "O valor total é R$ "  + total.toFixed(2) + "  +  Entrada: R$" + entrada;
        
      
        document.querySelector("#pagamentos").innerHTML = `
        <hr>
            <div class="flex2 mt-4">
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-paypal"></i>
                <i class="fab fa-cc-apple-pay"></i>
            </div>
            <hr>
            <div class="flex2">
                <div>
                    <p><strong>1x</strong> de ${(total.toFixed(2))} sem juros</p>
                    <p><strong>2x</strong> de ${(total/2).toFixed(2)} sem juros</p>
                    <p><strong>3x</strong> de ${(total/3).toFixed(2)} sem juros</p>
                    
                </div>
                <div>
                    <p><strong>4x</strong> de ${(total/4).toFixed(2)} sem juros</p>
                    <p><strong>5x</strong> de ${(total/5).toFixed(2)} sem juros</p>
                    <p><strong>6x</strong> de ${(total/6).toFixed(2)} sem juros</p>
                </div>
            </div>
            
            
       <hr>
            <div class="boleto">
                <i class="fas fa-barcode"></i>
                <label><strong>Boleto Bancário</strong></label>
            
            </div>
            <a href="" class="btn btn-warning m-2"> Finalizar</a>
        `
    }


    let addC = document.querySelectorAll(".add");
    for (i = 0 ; i < addC.length; i++) {
        addC[i].addEventListener('click', function(){
            let key =  this.getAttribute('key');
            itens[key].amount++;
            carregarCarrinho();
        });
    }
