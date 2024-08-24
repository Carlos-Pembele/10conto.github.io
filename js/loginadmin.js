
const form = {

    nome: () => document.querySelector("#nome"),
    email: () => document.querySelector("#email"),
    senha: () => document.querySelector("#senha")
}

const EmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 let AreaErradaNameAdmin = document.querySelector(".InformationNameAdmin");
 let AreaErradaEmailAdmin = document.querySelector(".InformationEmailAdmin");
 let AreaErradaSenhaAdmin = document.querySelector(".InformationSenhaAdmin");

function Admin(){

    if(form.nome().value.length == 0 && form.email().value.length == 0 && form.senha().value.length == 0){
        AreaErradaNameAdmin.innerHTML = "Informe o nome do administrador!"
        AreaErradaEmailAdmin.innerHTML = "Informe o E-mail do administrador!"
        AreaErradaSenhaAdmin.innerHTML = "Informe a senha do Administrador!"
    }
    else if (form.nome().value.length ==0 ){
        AreaErradaNameAdmin.innerHTML = "Informe o nome do administrador!"
        AreaErradaEmailAdmin.innerHTML = ""
        AreaErradaSenhaAdmin.innerHTML = ""
    }
    else if (form.email().value.length ==0 ){
        AreaErradaNameAdmin.innerHTML = ""
        AreaErradaEmailAdmin.innerHTML = "Informe o E-mail do administrador!"
        AreaErradaSenhaAdmin.innerHTML = ""
    }
    else if (form.senha().value.length ==0 ){
        AreaErradaNameAdmin.innerHTML = ""
        AreaErradaEmailAdmin.innerHTML = ""
        AreaErradaSenhaAdmin.innerHTML = "Informe a senha do Administrador!"
    }

    else{

        if(EmailValidation.test(form.email().value)){
            if(form.nome().value == "Qualquer"){
                if(form.senha().value == "0000"){
                    if(form.email().value == "devpembelejr@gmail.com" ){
                        window.location.href="../pagina/admin.html";
                    }
                    else{
                        AreaErradaNameAdmin.innerHTML = ""
                        AreaErradaEmailAdmin.innerHTML = "O E-mail digitado está incorrecto!"
                        AreaErradaSenhaAdmin.innerHTML = ""
                    }
                }
                else{
                    AreaErradaNameAdmin.innerHTML = ""
                    AreaErradaEmailAdmin.innerHTML = ""
                    AreaErradaSenhaAdmin.innerHTML = "A senha digitada está incorrecta!"
                }
            }
            else{
                AreaErradaNameAdmin.innerHTML = "O Nome digitado está incorrecto!"
                AreaErradaEmailAdmin.innerHTML = ""
                AreaErradaSenhaAdmin.innerHTML = ""
            }
        }
        else{
            AreaErradaNameAdmin.innerHTML = "O E-mail digitado não é válido!"
            AreaErradaEmailAdmin.innerHTML = ""
            AreaErradaSenhaAdmin.innerHTML = ""
        }

    }


}

function LoadingPage(){

    let espalhamento = document.getElementById("espalhamento").innerHTML = "";

    let fundo = `
    <section  id="CorpoLoader">

<div id="loaderBody">
<div id="LoaderBodyCenter">
        <svg>
        <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
            <feColorMatrix values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
            "
        </filter>
     </svg>
    <div class="loader" style="position: relative; width: 250px; height: 250px; filter: url(#gooey); animation: animate 16s linear infinite;">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span class="rotate" style="--j:0"></span>
        <span class="rotate" style="--j:1"></span>
        <span class="rotate" style="--j:2"></span>
        <span class="rotate" style="--j:3"></span>
        <span class="rotate" style="--j:4"></span>
    </div>
    </div>

 <div>
   <h3 style="color: white; text-align: center;">Carregando...</h3>
</div>

</div>




     
    
</section>
     `

     espalhamento = document.getElementById("espalhamento").innerHTML = fundo;
     setTimeout(()=> ContinueLoading(), 4000)


}


function ContinueLoading(){
    let loadings = document.getElementById("espalhamento").innerHTML = "";
    Admin();
}

function Chamada(){
LoadingPage();
}
