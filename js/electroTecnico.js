fetch("../js/backEndHome.json")
.then(response =>{
  return response.json()
})
.then(data =>{

    
   localStorage.setItem("produtos", JSON.stringify(data))
   console.log("dados dos produtos salvos no localStorage")

    setTimeout( () => {
        let legenda = document.getElementById("Produto").innerHTML = "";

        var produtoHTML = `
      <div class="legenda_img pt-3 pb-3" style="width:100%;justify-content: space-around;">
      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte" data-id="${data.Prod[0].id}" class="parte">
        <figure>
           <img src="${data.Prod[12].img}" style="width:100%; height: 30vh;  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[12].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[12].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3" onclick="Endereco()" style="position:relative;">
                   <p ><a  href="../pagina/detalhe.html"  class="button bg-danger text-white text-decoration-none p-1 btn id="item">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte1" data-id="${data.Prod[1].id}"  class="parte1">
      <figure>
       <img src="${data.Prod[13].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[13].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[13].descricao}</p>
           </div>
             <div class="Preco text-end me-3" onclick="Endereco1()">
             <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn  id="item">Detalhes</a></p>
             </div>
          </p>
       </figcaption>
      </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte2" data-id="${data.Prod[2].id}"  class="parte2">
       <figure>
           <img src="${data.Prod[18].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[18].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[18].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3" onclick="Endereco2()">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn id="item">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
       </figure>
      </div>   
   </div>
      `;

       legenda = document.getElementById("Produto").innerHTML = produtoHTML;

       let legenda1 = document.getElementById("Produto1").innerHTML = "";

      var produto1HTML = `
      <div class="legenda_img pt-3 pb-3" style="width:100%;justify-content: space-around;">

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte" data-id="${data.Prod[3].id}"  class="parte">
        <figure>
           <img src="${data.Prod[15].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[15].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[15].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3  onclick="Endereco()"">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte" data-id="${data.Prod[4].id}"  class="parte1">
      <figure>
       <img src="${data.Prod[0].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[0].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
           <p>${data.Prod[0].descricao}</p>
           </div>
             <div class="Preco text-end me-3  onclick="Endereco()"">
             <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
             </div>
          </p>
       </figcaption>
      </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" id="parte" data-id="${data.Prod[5].id}"  class="parte2">
       <figure>
           <img src="${data.Prod[17].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[17].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[17].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3  onclick="Endereco()"">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
       </figure>
      </div>   
   </div>
      `;

       legenda1 = document.getElementById("Produto1").innerHTML = produto1HTML

       let legenda2 = document.getElementById("Produto2").innerHTML = "";

      var produto2HTML = `
      <div class="legenda_img pt-3 pb-3" style="width:100%;justify-content: space-around;">
      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" class="parte">
        <figure>
           <img src="${data.Prod[6].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[6].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[6].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte1">
      <figure>
       <img src="${data.Prod[21].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[21].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
           <p>${data.Prod[21].descricao}</p>
           </div>
             <div class="Preco text-end me-3">
             <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
             </div>
          </p>
       </figcaption>
      </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte2">
       <figure>
           <img src="${data.Prod[8].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[8].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[8].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
       </figure>
      </div>   
   </div>
      `;

       legenda2 = document.getElementById("Produto2").innerHTML = produto2HTML;

       let legenda3 = document.getElementById("Produto3").innerHTML = "";

      var produto3HTML = `
      <div class="legenda_img pt-3 pb-3" style="width:100%;justify-content: space-around;">
      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" class="parte">
        <figure>
           <img src="${data.Prod[22].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[22].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[22].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte1">
      <figure>
       <img src="${data.Prod[19].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[19].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[19].descricao}</p>
                 </div>
             <div class="Preco text-end me-3">
             <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
             </div>
          </p>
       </figcaption>
      </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte2">
       <figure>
           <img src="${data.Prod[24].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[24].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[24].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
       </figure>
      </div>   
   </div>
      `;

       legenda3 = document.getElementById("Produto3").innerHTML = produto3HTML;

       let legenda4 = document.getElementById("Produto4").innerHTML = "";

      var produto4HTML = `
      <div class="legenda_img pt-3 pb-3" style="width:100%;justify-content: space-around;">
      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;" class="parte">
        <figure>
           <img src="${data.Prod[23].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[23].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[23].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
        </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte1">
      <figure>
       <img src="${data.Prod[25].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[25].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[25].descricao}</p>
                 </div>
             <div class="Preco text-end me-3">
             <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
             </div>
          </p>
       </figcaption>
      </figure>
      </div>

      <div style="width: 300px; box-shadow: 6px 8px 8px 6px rgba(0, 0, 0, .1); border: 2px solid #c2c2c2; border-top-right-radius: 10px; border-bottom-left-radius: 10px;"  class="parte2">
       <figure>
           <img src="${data.Prod[1].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[1].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[1].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html" class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
                   </div>
               </p>
           </figcaption>
       </figure>
      </div>   
   </div>
      `;

       legenda4 = document.getElementById("Produto4").innerHTML = produto4HTML;

       
       

    }, 2000 )
})


function Ates(){
  window.location.href="../pagina/login.html";
}
function Troca(){
  window.location.href="../pagina/carrinho.html";
}