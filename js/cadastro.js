

function Cadastrar(){

    
    const form = {
        email: () => document.querySelector("#emailUser"),
        senha: () => document.querySelector("#senhaUser")
    }
    const EmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let email = document.querySelector("#emailUser"); 
    console.log(form.email().value)

    let AreaErradaName = document.querySelector(".InformationName");
    let AreaErradaEmail = document.querySelector(".InformationEmail");
    let AreaErradaSenha = document.querySelector(".InformationSenha");

    if( form.email().value.length == 0 && form.senha().value.length == 0 ){
        AreaErradaEmail.innerHTML = "Informe o seu E-mail!"
        AreaErradaSenha.innerHTML = "Informe a sua senha!"
    }
    
     else if(form.email().value.length == 0){
        AreaErradaEmail.innerHTML = "Informe o seu E-mail!"
        AreaErradaSenha.innerHTML = ""
    }
    else if(form.senha().value.length == 0){
        AreaErradaEmail.innerHTML = ""
        AreaErradaSenha.innerHTML = "Informe a sua senha!"
    }
    else{
        
        if(EmailValidation.test(email.value)){
            const auth = firebase.auth();
            auth.createUserWithEmailAndPassword(form.email().value, form.senha().value)
        .then((userCredential) => {
            // Usuário cadastrado com sucesso!
            console.log('Usuário cadastrado:', userCredential.user);
            alert('Cadastro realizado com sucesso!');
               window.location.href="../index.html"

               let nome = document.querySelector("#nomeUser").value
               localStorage.setItem("#nome", nome)
   
               let email = document.querySelector("#emailUser").value
               localStorage.setItem("#email", email)
   
               let senha = document.querySelector("#senhaUser").value
               localStorage.setItem("#senha", senha)

        })
        .catch((error) => {
            // Erro no cadastro
            console.error('Erro no cadastro:', error);
            alert('Falha no cadastro!');
        });

        }
        else{
            alert("O Email digitado não é válido!!!")
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
     `;

     espalhamento = document.getElementById("espalhamento").innerHTML = fundo;
     setTimeout(()=> ContinueLoading(), 4000)


}
function ContinueLoading(){
    let loadings = document.getElementById("espalhamento").innerHTML = "";
    Cadastrar();
}

function Chamada(){
    LoadingPage();
}
