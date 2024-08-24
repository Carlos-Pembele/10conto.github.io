
fetch("../js/backEndHome.json")
   .then(response => response.json())
   .then(data => {

      localStorage.setItem("produtos", JSON.stringify(data))
      console.log("Produtos salvos no localStorage")


      setTimeout(() => {

         let legenda = document.getElementById("Produto").innerHTML = "";

         data.forEach(produto => {

            let ProdutoHTML = `
         <div data-title="${produto.categoria}" style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte" data-id="${produto.id}" class="parteItem">
        <figure>
           <img src="${produto.img}" style="width:100%; height: 30vh;  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${produto.Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${produto.descricao}</p>
                 </div>
                 <div class="Preco text-end me-3" style="position:relative;">
                   <p ><a onclick="Endereco()" class="MenuItem button bg-danger text-white text-decoration-none p-1 btn"  href="#" id="item" data-id="" >Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div> `;

            legenda = document.getElementById("Produto").innerHTML += ProdutoHTML;

         });

         const menuItens = document.querySelectorAll(".MenuItem")

         menuItens.forEach((item, index) => {
            item.addEventListener("click", () => {
               var id = index;
               localStorage.setItem("detalhe", id)
               window.location.href = "../pagina/detalhe.html";
            })
         })

         let BarraDePesquisa = document.querySelector(".pesquisaInput")
         let Body1 = document.querySelector(".componenteInicial")
         let Body2 = document.querySelector(".text")

         BarraDePesquisa.addEventListener("keyup", () => {
            let input = document.querySelector(".pesquisaInput").value
            input = input.toLowerCase()

            let X = document.querySelectorAll(".parteItem");

            console.log(X)

            if (input < 1) {
               const mediaKery = window.matchMedia("(min-width:300px) and (max-width:767px)");
               if(mediaKery.matches){
                  Body1.style.display = "block";
                  Body2.style.display = "flex";
               }

               const mediaKery1 = window.matchMedia("(min-width:767px) and (max-width:1023px)");
               if(mediaKery1.matches){
                  Body1.style.display = "flex";
                  Body2.style.display = "flex";
               }

               const mediaKery2 = window.matchMedia("(min-width:1024px)");
               if(mediaKery2.matches){
                  Body1.style.display = "flex";
                  Body2.style.display = "flex";
               }
               

            }
            else {
               for (let i = 0; i < X.length; i++) {
                  if (!X[i].innerHTML.toLocaleLowerCase().includes(input)) {
                     X[i].style.display = "none"


                  }
                  else {
                     X[i].style.display = "flex"
                     Body1.style.display = "none"
                     Body2.style.display = "none"

                  }
               }

            }


         })


      }, 1000)

   })
   .catch(error => console.log("Ocorreu erro no consumo da api: ", error))


setTimeout(() => {
   let carrinho = JSON.parse(localStorage.getItem("carrinho"))
   let localDoItem = document.getElementById("quantia");

   localDoItem.innerHTML = carrinho.length;
}, 200)


function Ates() {
   window.location.href = "../pagina/login.html";
}
function Troca() {
   window.location.href = "../pagina/carrinho.html";
}
function Modelo(){
   const modelo = document.querySelector('.modulo')
   modelo.style.right = '15px'
}
function ModeloFecho(){
   const modelo = document.querySelector('.modulo')
   modelo.style.right = '-400px'
}

const indicador = document.querySelector(".indicator");
const maxAltura = document.body.scrollHeight - window.innerHeight;
window.addEventListener('scroll', () => {
   const percentagem = (window.scrollY / maxAltura) * 100;

   indicador.style.width = `${percentagem}%`;

})