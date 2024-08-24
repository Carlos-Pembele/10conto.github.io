
let localCarrinho = localStorage.getItem("carrinho")

if(localCarrinho){
  let carrinho = JSON.parse(localCarrinho);
    if(carrinho.length > 0){

        RenderizarCarrinho()
        calcularTotal()

    }
    else{
      SacolinhaVzia()
    }
}
else{
  SacolinhaVzia()
}



function calcularTotal(){
  let totalCarrinho = 0;
  let carrinho = JSON.parse(localCarrinho);
  let Total = document.getElementById("TotalDeCompras").innerHTML = "";
  carrinho.forEach(function(index, itemCarrinho){
    totalCarrinho += index.total_Item;

    Total = document.getElementById("TotalDeCompras").innerHTML = totalCarrinho+" AO";

  }) 
}

function SacolinhaVzia(){

  let Limpar = document.querySelector(".componentes").innerHTML = "";
  let LimparTotal = document.querySelector(".totalsub").innerHTML = "";

  let divImage = `    
    <div style="width: 100%; display: block; text-align: center; justify-content: center;">
    <img style="width: 250px; height: 250px" src="../img/icon/addCar.png"  alt=""> </br>
    <h5 style="color: gray; ">O seu Carrinho está vazio!</h5>
    <h5 style="color: gray; ">Adicione um produto porfavor!!</h5>

    </div>
  `;

  Limpar = document.querySelector(".componentes").innerHTML += divImage;
}


function RenderizarCarrinho(){

  let Limpar = document.querySelector(".componentes").innerHTML = "";
  let carrinho = JSON.parse(localCarrinho);

    carrinho.forEach(function(index, itemCarrinho){
      console.log(itemCarrinho)
      let ItemDiv = `
      
  <div class="cartProduto bg-secundary" 
  style="display: flex; box-shadow: 4px 6px 5px 4px #7272721a; margin-bottom: 15px; width: 100%; padding-left: 5%; padding-right: 5%; padding-top: 10px; padding-bottom: 10px; background-color: #e9dfdf; border-radius: 15px;">
  <div class="imagecart">
    <img src="${index.item.img}" alt="" class="ImageProd img-fluid">
  </div>

  <div class="caracterProd">
    <div class="NomeProdX"
      style="display: flex; width: 100%; justify-content: space-between; text-align: center;">
      <div style="width: 70%; text-align: left; white-space: nowrap; ">
        <h3 class="TitleProd">${index.item.Title}</h3>
      </div>
      <div class="EliminarItem" data-index="${itemCarrinho}" id="Delete">
        <span class="DelProd">X</span>
      </div>
    </div>

    <div class="qualidade" style=" margin-top: 5px;">
      <h6 class="ElementPrCima" style="color: rgb(107, 105, 105); font-weight: 600;">PC Potente e Adaptável</h6>
    </div>

    <div class="PrecoProd">
      <div class="precoProduto">
        <h4 class="ElementPr" style="font-weight: bold;">Preço</h4>
      </div>
      <div class="ProdBtn">
        <a href="#" class="Min" data-index="${itemCarrinho}" id="minus">-</a>
        <input type="text" class="inputQuant" value="${index.quantidade}">
        <a href="#" class="Mai" data-index="${itemCarrinho}" id="mais">+</a>
      </div>
    </div>

  </div>

      `;

      Limpar = document.querySelector(".componentes").innerHTML += ItemDiv;
  
  });

  const menuItens = document.querySelectorAll("#Delete")

      menuItens.forEach((item,index)=>{
         item.addEventListener("click", ()=>{
          let indexDoElemeto = index 

          let carrinho = JSON.parse(localCarrinho);
          carrinho.splice(indexDoElemeto, 1)
          localStorage.setItem("carrinho", JSON.stringify(carrinho))

          prodExcluir()
            
         })
      })

    const menus = document.querySelectorAll("#minus")

      menus.forEach((item,index)=>{
        item.addEventListener("click", ()=>{
         let diminuir = index;

         let carrinho = JSON.parse(localCarrinho);

   // se tem maos de um item na minha quantidade
         if(carrinho[diminuir].quantidade > 1){
               carrinho[diminuir].quantidade --;
               console.log("O total agora é :", carrinho[diminuir].quantidade)
               carrinho[diminuir].total_Item = carrinho[diminuir].quantidade * carrinho[diminuir].item.preco_promocional;

               localStorage.setItem("carrinho", JSON.stringify(carrinho))
               window.location.href = "../pagina/carrinho.html"

         }
         else{
            carrinho.splice(diminuir, 1)
            localStorage.setItem("carrinho", JSON.stringify(carrinho))
            window.location.href = "../pagina/carrinho.html"
            
         }

        })
     });

  const plus = document.querySelectorAll("#mais")

     plus.forEach((item,index)=>{
      item.addEventListener("click", ()=>{
       let aumentar = index;
       let carrinho = JSON.parse(localCarrinho);

       carrinho[aumentar].quantidade ++;
       console.log("O tatal agora é:",carrinho[aumentar].quantidade)
       carrinho[aumentar].total_Item = carrinho[aumentar].quantidade * carrinho[aumentar].item.preco_promocional;
       console.log(carrinho[aumentar].total_Item)

       localStorage.setItem("carrinho", JSON.stringify(carrinho))

       window.location.href = "../pagina/carrinho.html"

       
      })
   });

}

function Compra(){

  let EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = "";

  let OperacaoCompra = `
          <div class="pagamentoBody">
      <div class="FundoPagamento container">

        <div class="pagamento">

          <h4 class="TituloPagamento"> Informações Pessoais </h4>
          
          <label for="nomeComprador" class="labelPagamento">Nome</label>
          <input type="text" id="nomeComprador" class="InputPagamento" placeholder="10conto...">
          
          <label for="TelefoneComprador" class="labelPagamento">Número de Telefone</label>
          <input type="text" id="TelefoneComprador" class="InputPagamento" placeholder="+244 952667002">
          
          <label for="LocalComprador" class="labelPagamento">Endereço</label>
          <input type="text" id="LocalComprador" class="InputPagamento" placeholder="Luanda/Kilamba">

      <h4 class="TituloPagamento" style="padding-top: 10px;">Informação do Cartão</h4>
      
        <div class="CardIcon">
          <img class="img-fluid" style="width:30px; height: 25px; margin-right: 17px; margin-top: 7px;" src="../img/icon/visa.png" alt="">
          <img class="tamanhoImagem img-fluid" src="../img/icon/mastercard1.png" style="margin-right: 17px;" alt="">
          <img class="tamanhoImagem img-fluid" src="../img/icon/paypal.png" alt="">
          <img class="img-fluid" style="width:70px; height: 25px; margin-right: -15px; margin-top: 7px;" src="../img/icon/express.png" alt="">
        </div>

        <input type="password" name="" id="NumeroCartão" class="InputPagamento" placeholder="Número do Cartão" style="margin-top: 10px;">

        <div class="cardInformation">
          <input type="text" placeholder="mm" class="InputPagamento sm">
          <input type="text" placeholder="yyyy" class="InputPagamento sm">
          <input type="text" placeholder="cvv" class="InputPagamento sm">
        </div>

      <button class="comprar bg-danger text-white" onclick="RealizarCompra()">Comprar</button>
      <span class="Fechar" onclick="FecharPagamento()">X</span>
    </div>
  </div>
</div>
  `;

  EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = OperacaoCompra;

}

function FecharPagamento(){

  let EspacoPagamento = document.querySelector(".EspacoPagamento").innerHTML = "";

}

function RealizarCompra(){
  alert("Compra feita com sucesso")
}

function prodExcluir(){

  let ProdExcluir = document.querySelector(".EspacoDeleteCerto").innerHTML = "";

  let ExcluirCert =`
     <div class=" pagamentoBody">
        <div class="FundoPagamento container">
  
          <div class="SMSDelete">

            <div class="distan">
              <img src="../img/icon/sucesso.png" alt="" class="certoElimnation img-fluid">
            </div>

            <div class="distan">
              <h4 style="color: black;" class="textcima">Excluído com sucesso!</h4>
              <h6 style="color: gray;" class="textbaixo">O Produto foi excluído do da sua sacola de compras!</h6>
            </div>

            <div class="distan">
              <button class="sim bg-primary text-white">Sim</button>
            </div>

          
         </div>
    </div>
  </div>`;


    EspacoPagamento = document.querySelector(".EspacoDeleteCerto").innerHTML = ExcluirCert;

    let sim = document.querySelector(".sim");

    sim.addEventListener("click", ()=>{
          window.location.href = "../pagina/carrinho.html"
    })
 
 
  
}














/*
let itemCarrinho = localStorage.getItem("ProdElement0");
let itemCarrinho1 = localStorage.getItem("ProdElement1");
let quantidadeItem = localStorage.getItem("carrinho");

if(quantidadeItem){
    let carrinho = JSON.parse(itemCarrinho);

    if(quantidadeItem.length > 0){
      RenderizarCarrinho()
      RenderizarCarrinho1()

         
    }
    else{
        CarrinhoVazio()
    }
}
else{
    CarrinhoVazio()
}

function CarrinhoVazio(){
    console.log("O carrinho está vazio")
    let CarrinhoVazioDotop = document.querySelector(".componentes").innerHTML = "";
}

function RenderizarCarrinho(){

     let ItemCarrinhoPercorrido = `
     <div class="cartProduto bg-secundary"
        style="display: flex; box-shadow: 4px 6px 5px 4px #7272721a; margin-bottom: 15px; width: 100%; padding-left: 5%; padding-right: 5%; padding-top: 10px; padding-bottom: 10px; background-color: #e9dfdf; border-radius: 15px;">
        <div class="imagecart">
          <img src="${ProdElement0.img}" alt="" class="img-fluid" style="width: 250px; border-radius: 10px;">
        </div>

        <div class="caracterProd">
          <div class="NomeProdX"
            style="display: flex; width: 100%; justify-content: space-between; text-align: center;">
            <div style="width: 70%; text-align: left; white-space: nowrap; ">
              <h3 style="font-weight: bold; text-overflow: ellipsis; overflow: hidden; ">${ProdElement0.Title}</h3>
            </div>
            <div
              style="width: 30%; color:white; padding-top: 2px; width: 30px; height: 30px; border-radius: 5px; cursor: pointer;"
              class="bg-danger"> X </div>
          </div>

          <div class="qualidade" style=" margin-top: 5px;">
            <h6 style="color: rgb(107, 105, 105); font-weight: 600;">PC Potente e Adaptável</h6>
          </div>

          <div class="PrecoProd">
            <div class="precoProduto">
              <h4 style="font-weight: bold;">Preço</h4>
            </div>
            <div class="ProdBtn">
              <a href=""
                style="width:30px; padding-top: 5px; padding-bottom: 5px;padding-left: 8px; padding-right: 8px; border-radius: 8px; border: 1px solid gray; justify-content: center; align-items: center; text-decoration: none; background-color: white; color: gray;">-</a>
              <input type="text" value="1"
                style="width: 70px; text-align: center; border-radius: 7px; border: 1px solid gray;">
              <a href=""
                style="width:30px; padding-top: 5px; padding-bottom: 5px;padding-left: 8px; padding-right: 8px; border-radius: 8px; border: 1px solid gray; justify-content: center; align-items: center; text-decoration: none; background-color: white; color: gray;">+</a>
            </div>
          </div>

        </div>
   </div>
     `
   let  CarrinhoVazioDotop = document.querySelector(".componentes").innerHTML += ItemCarrinhoPercorrido;
}


function RenderizarCarrinho1(){

  let ItemCarrinhoPercorrido = `
  <div class="cartProduto bg-secundary"
     style="display: flex; box-shadow: 4px 6px 5px 4px #7272721a; margin-bottom: 15px; width: 100%; padding-left: 5%; padding-right: 5%; padding-top: 10px; padding-bottom: 10px; background-color: #e9dfdf; border-radius: 15px;">
     <div class="imagecart">
       <img src="${ProdElement1.img}" alt="" class="img-fluid" style="width: 250px; border-radius: 10px;">
     </div>

     <div class="caracterProd">
       <div class="NomeProdX"
         style="display: flex; width: 100%; justify-content: space-between; text-align: center;">
         <div style="width: 70%; text-align: left; white-space: nowrap; ">
           <h3 style="font-weight: bold; text-overflow: ellipsis; overflow: hidden; ">${ProdElement1.Title}</h3>
         </div>
         <div
           style="width: 30%; color:white; padding-top: 2px; width: 30px; height: 30px; border-radius: 5px; cursor: pointer;"
           class="bg-danger"> X </div>
       </div>

       <div class="qualidade" style=" margin-top: 5px;">
         <h6 style="color: rgb(107, 105, 105); font-weight: 600;">PC Potente e Adaptável</h6>
       </div>

       <div class="PrecoProd">
         <div class="precoProduto">
           <h4 style="font-weight: bold;">Preço</h4>
         </div>
         <div class="ProdBtn">
           <a href=""
             style="width:30px; padding-top: 5px; padding-bottom: 5px;padding-left: 8px; padding-right: 8px; border-radius: 8px; border: 1px solid gray; justify-content: center; align-items: center; text-decoration: none; background-color: white; color: gray;">-</a>
           <input type="text" value="1"
             style="width: 70px; text-align: center; border-radius: 7px; border: 1px solid gray;">
           <a href=""
             style="width:30px; padding-top: 5px; padding-bottom: 5px;padding-left: 8px; padding-right: 8px; border-radius: 8px; border: 1px solid gray; justify-content: center; align-items: center; text-decoration: none; background-color: white; color: gray;">+</a>
         </div>
       </div>

     </div>
</div>
  `
  let CarrinhoVazioDotop = document.querySelector(".componentes").innerHTML += ItemCarrinhoPercorrido;
}

*/