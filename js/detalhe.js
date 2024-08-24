
let id = parseInt(localStorage.getItem("detalhe"));

let produtos = JSON.parse(localStorage.getItem("produtos"));

let item = produtos.find( produto => produto.id === id);

if(item){
   console.log("Produto encontrado ",item)
   document.getElementById("fotoDetalhe").src = item.img;
   document.getElementById("NomeProdutoDetail").innerHTML = item.Title;
}
else{
   console.log("Produto não encontrado")
}

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function AdicionarAoCarrinho(item, quantidade){


   let ProdExcluir = document.querySelector(".EspacoDeleteCerto").innerHTML = "";

   let ExcluirCert =`
      <div class=" pagamentoBody">
         <div class="FundoPagamento container">
   
           <div class="SMSDelete">
 
             <div class="distan">
               <img src="../img/icon/sucesso.png" alt="" class="certoElimnation img-fluid">
             </div>
 
             <div class="distan">
               <h4 style="color: black;" class="textcima">Produto Adicionado</h4>
               <h6 style="color: gray;" class="textbaixo">O Produto foi adicionado com sucesso na sua sacola de compras!</h6>
             </div>
 
             <div class="distan">
               <button class="sim bg-primary text-white">sim</button>
             </div>
 
           
          </div>
     </div>
   </div>`;
 
 
     EspacoPagamento = document.querySelector(".EspacoDeleteCerto").innerHTML = ExcluirCert;
 
     let sim = document.querySelector(".sim");
 
     sim.addEventListener("click", ()=>{
           window.location.href = "../pagina/detalhe.html"
     })

   var ItemNoCarrinho = carrinho.find( c => c.item.id === item.id);

   if(ItemNoCarrinho){

      ItemNoCarrinho.quantidade += quantidade;
      ItemNoCarrinho.total_Item = ItemNoCarrinho.quantidade * item.preco_promocional;

   }
   else{
      carrinho.push({
         item: item,
      quantidade: quantidade,
      total_Item: quantidade * item.preco_promocional
      })
   }

   localStorage.setItem("carrinho", JSON.stringify(carrinho))

}








/*
var id = parseInt( localStorage.getItem("detalhe"));

 var produtos = JSON.parse(localStorage.getItem("produtos"));

 console.log(produtos)
 console.log(id)

 if(produtos.Prod[0].id === id){
   var ProdElement0 = produtos.Prod[0];
   localStorage.setItem("ProdElement0", JSON.stringify(ProdElement0));
    console.log("Produtos encontrado ", produtos.Prod[0])
    document.getElementById("fotoDetalhe").src = produtos.Prod[0].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[0].Title;

 }
 else if(produtos.Prod[1].id === id){
   var ProdElement1 = produtos.Prod[1];
   localStorage.setItem("ProdElement1", JSON.stringify(ProdElement1));
   console.log("Produtos encontrado ", produtos.Prod[1])
    document.getElementById("fotoDetalhe").src = produtos.Prod[1].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[1].Title;

 }
 else if(produtos.Prod[2].id === id){
    console.log("Produtos encontrado ", produtos.Prod[2])
    document.getElementById("fotoDetalhe").src = produtos.Prod[2].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[2].Title;

 }
 else if(produtos.Prod[3].id === id){
    console.log("Produtos encontrado ", produtos.Prod[3])
    document.getElementById("fotoDetalhe").src = produtos.Prod[3].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[3].Title;

 }
 else if(produtos.Prod[4].id === id){
    console.log("Produtos encontrado ", produtos.Prod[4])
    document.getElementById("fotoDetalhe").src = produtos.Prod[4].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[4].Title;

 }
 else if(produtos.Prod[5].id === id){
    console.log("Produtos encontrado ", produtos.Prod[5])
    document.getElementById("fotoDetalhe").src = produtos.Prod[5].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[5].Title;

 }
 else if(produtos.Prod[6].id === id){
    console.log("Produtos encontrado ", produtos.Prod[6])
    document.getElementById("fotoDetalhe").src = produtos.Prod[6].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[6].Title;

 }
 else if(produtos.Prod[7].id === id){
    console.log("Produtos encontrado ", produtos.Prod[7])
    document.getElementById("fotoDetalhe").src = produtos.Prod[7].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[7].Title;

 }
 else if(produtos.Prod[8].id === id){
    console.log("Produtos encontrado ", produtos.Prod[8])
    document.getElementById("fotoDetalhe").src = produtos.Prod[8].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[8].Title;

 }
 else if(produtos.Prod[9].id === id){
    console.log("Produtos encontrado ", produtos.Prod[9])
    document.getElementById("fotoDetalhe").src = produtos.Prod[9].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[9].Title;

 }
 else if(produtos.Prod[10].id === id){
    console.log("Produtos encontrado ", produtos.Prod[10])
    document.getElementById("fotoDetalhe").src = produtos.Prod[10].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[10].Title;

 }
 else if(produtos.Prod[11].id === id){
    console.log("Produtos encontrado ", produtos.Prod[11])
    document.getElementById("fotoDetalhe").src = produtos.Prod[11].img;
    document.getElementById("NomeProdutoDetail").innerHTML = produtos.Prod[11].Title;

 }

 else{
    console.log("Produto não encontrado")
 }

 
 let quantidade = 1;
 let total = 1; 

 function AdicionarAoCarrinho(quant){
   let carrinho = JSON.parse(localStorage.getItem("carrinho")) ||  []; 
   console.log("Adicionado ao carrinho")

    if(produtos.Prod[0].id === id){

      let CarrinhoElemento = carrinho.find( c => c.Prod === produtos.Prod.id )

      if(CarrinhoElemento){

         CarrinhoElemento.quant += quant;
         console.log(CarrinhoElemento.quant)

      }
      else{
         
         carrinho.push({
             quant: quant
         })

      }

     }
     else if(produtos.Prod[1].id === id){

      let CarrinhoElemento = carrinho.find( c => c.Prod === produtos.Prod.id )

      if(CarrinhoElemento){

         CarrinhoElemento.quant += quant;
         console.log(CarrinhoElemento.quant)

      }
      else{
         
         carrinho.push({
             quant: quant
         })

      }

     }


     localStorage.setItem("carrinho", JSON.stringify(carrinho));

 }

 */