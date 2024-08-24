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
           <img src="${data.Prod[29].img}" style="width:100%; height: 30vh;  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[29].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[29].descricao}</p>
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
       <img src="${data.Prod[28].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[28].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[28].descricao}</p>
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
           <img src="${data.Prod[27].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[27].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[27].descricao}</p>
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
           <img src="${data.Prod[26].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[26].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[26].descricao}</p>
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
       <img src="${data.Prod[16].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[16].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
           <p>${data.Prod[16].descricao}</p>
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
           <img src="${data.Prod[5].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[5].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[5].descricao}</p>
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
           <img src="${data.Prod[30].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[30].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[30].descricao}</p>
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
       <img src="${data.Prod[10].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[10].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
           <p>${data.Prod[10].descricao}</p>
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
           <img src="${data.Prod[11].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[11].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[11].descricao}</p>
                 </div>
                 <div class="Preco text-end me-3">
                   <p><a href="../pagina/detalhe.html"class="button bg-danger text-white text-decoration-none p-1 btn">Detalhes</a></p>
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
           <img src="${data.Prod[9].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[9].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[9].descricao}</p>
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
       <img src="${data.Prod[31].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[31].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[31].descricao}</p>
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
           <img src="${data.Prod[32].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[32].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[32].descricao}</p>
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
           <img src="${data.Prod[33].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[33].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[33].descricao}</p>
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
       <img src="${data.Prod[34].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid" alt="">
       <figcaption class="ps-2">
          <p class="">
           <h5 class="text-danger">${data.Prod[34].Title}</h5>
           <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[34].descricao}</p>
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
           <img src="${data.Prod[35].img}" style="width:100%; height: 30vh; box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, .1)" class="img-fluid " alt="">
           <figcaption class="ps-2">
               <p class="">
                 <h5 class="text-danger">${data.Prod[35].Title}</h5>
                 <div style="width:100%;height:120px; overflow: hidden; text-overflow: ellipsis; ">
                 <p>${data.Prod[35].descricao}</p>
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