

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
    RecuperarSenha();
}

function RecuperarSenha(){

    const form = {
        email: () => document.querySelector("#email")
    }

    const email = document.querySelector("#email");
    const EmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let AreaErradaEmail = document.querySelector(".InformationEmail");

    
    if(form.email().value.length == 0){
        
        AreaErradaEmail.innerHTML = "Informe o seu E-mail!";
    }
    else{

        if(EmailValidation.test(email.value)){
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(form.email().value)
        .then(() => {
            alert('Email de redefinição de senha enviado com sucesso! abra o seu E-mail!');
            window.location.href="../pagina/login.html"
        })
        .catch((error) => {
            console.error('Erro ao enviar email de redefinição:', error);
            alert('Falha no envio do email de redefinição!');
        });
            
        }
        else{
            AreaErradaEmail.innerHTML = "O E-mail digitado não é válido...";
        }
    }

}

function Chamada(){
    LoadingPage();
}