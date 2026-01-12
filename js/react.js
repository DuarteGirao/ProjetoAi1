//Função que valida dados
//Na prática, os dados também devem ser validados no lado do servidor
function validarDados(nome, email, telefone, motivo, texto)
{
    if(nome == "" || email == "" || telefone == "" || motivo == "" || texto == "" ||
        nome == null || email == null || telefone == null || motivo == null || texto == null
    )
    {
        console.log("Dados por preencher");
        return "Ainda tem dados por prêencher!";
    }

    let output = "";

    //---------Validações nome
    if(nome.length < 2 || nome.length > 50)
    {
        console.warn("Erro no nome!");
        output += "Nome inválido! (<2 ou >50)\n";
    }

    //---------Validações email
    if(email.length < 5 || email.length > 50)
    {
        console.warn("Erro no email!");
        output += "Email inválido!\n";
    }
    else
    {
        let val = false;
        let j = 0;
        
        for(let i = 1; i < email.length-3; i++)     //O '@' não pode ser nenhum dos últimos 3 characteres, por isso não vale a pena ver o email até ao fim
        {
            if(email[i] == '@')
            {
                val = true;
                j = i;  //O 'j' vai ser utilizado para encontrar o ponto final, que só pode existir depois do '@' e outro character
            }
        }

        if(val)
        {
            val = false;
            for(j+2; j < email.length-1; j++)
            {
                if(email[j] == '.')
                {
                    val = true;
                }
            }
        }


        if(!val)
        {
            console.warn("Erro no email!");
            output += "Email inválido! (erro no '@' ou no ponto final)\n";
        }
    }

    //---------Validações telefone
    if(telefone.length != 9)
    {
        console.warn("Erro no telefone!");
        output += "Número de telefone inválido! (número de digitos maior ou menor que 9)\n";
    }
    else
    {
        for(let i = 0; i < 9; i++)
        {
            if(telefone[i] < '0' || telefone[i] > '9')
            {
                console.warn("Erro no telefone!");
                output += "Digito inválido no telefone ["+telefone[i]+"]";
            }
        }
    }

    //---------Validações motivo
    if(motivo.length < 2 || motivo.length > 50)
    {
        console.warn("Erro no motivo!");
        output += "Motivo inválido!\n";
    }

    //---------Validações texto
    if(texto.length < 2 || texto.length > 250)
    {
        console.warn("Erro na mensagem!");
        output += "Corpo da mensagem inválido!\n";
    }

    return output;
    
}

function guardarDados(nome, email, telefone, motivo, texto)
{
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("motivo", motivo);
    localStorage.setItem("texto", texto);
}

//Função que é ativada quando o utilizador submete a mensagem
function submissao(event) 
{       
    //Impedir que a página atualize após enviar a mensagem.
    event.preventDefault();

    //Remover espaços em branco no início e fim dos inputs
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let motivo = document.getElementById("motivo").value.trim();
    let texto = document.getElementById("texto").value.trim();

    let output = validarDados(nome, email, telefone, motivo, texto);

    if(!output)
    {
        console.log("Dados corretos");
        guardarDados(nome, email, telefone, motivo, texto);
        alert("Mensagem enviada com sucesso");
    }
    else
    {
        console.warn("Dados incorretos");
        alert(output);
    }

}

//Função que cria os elementos visuais do formulário
function formulario(props){

    return React.createElement("form", {onSubmit: submissao},
        React.createElement("h3",{class: "tituloContactos"},"Contacte-nos"),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Nome: "),
            React.createElement("input",{ type: 'text', id: "nome", required: true, defaultValue:props.nome},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Email: "),
            React.createElement("input",{ type: 'email', id: "email", required: true, defaultValue:props.email},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Telefone: "),
            React.createElement("input",{ type: 'tel', id: "telefone", required: true, defaultValue:props.telefone},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("hr",{class:"linhaSimples"},null),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Motivo: "),
            React.createElement("input",{ type: 'text', id: "motivo", required: true, defaultValue:props.motivo},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Corpo da mensagem: "),
            React.createElement("textarea",{ id:"texto", required: true, defaultValue:props.texto},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("button",{ type: 'submit', id: "enviar", class:"ButaoEnviar"}, "Enviar")
        )
    );

}

function formulario_localstorage()
{
    return React.createElement(formulario, {

        //Funciona assim, mas aparece um erro na consola
        /*
        nome:localStorage.getItem("nome"),
        email:localStorage.getItem("email"),
        telefone:localStorage.getItem("telefone"),
        motivo:localStorage.getItem("motivo"),
        texto:localStorage.getItem("texto")
        */
        nome: localStorage.getItem("nome"),
        email: localStorage.getItem("email"),
        telefone: localStorage.getItem("telefone"),
        motivo: localStorage.getItem("motivo"),
        texto: localStorage.getItem("texto")

    });
}

function formulario_vazio()
{
    return React.createElement(formulario, {
        nome: localStorage.getItem(""),
        email: localStorage.getItem(""),
        telefone: localStorage.getItem(""),
        motivo: localStorage.getItem(""),
        texto: localStorage.getItem("")

    });
}

// Obter referência ao elemento root
const root = ReactDOM.createRoot(document.getElementById("conteudo"));

const output = validarDados(localStorage.getItem("nome"), localStorage.getItem("email"), 
localStorage.getItem("telefone"), localStorage.getItem("motivo"), localStorage.getItem("texto"));

//Validar dados guardados
if(!output)
{
    console.log("Criar formulário a partir de local storage");
    form = formulario_localstorage();
}

else
{
    console.warn("Criar formulário vazio!");
    console.error(output)
    form = formulario_vazio();

    //não é necessário, mas apaga-se a base de dados caso exista algum dado errado, porque os dados não vão ser introduzidos de qualquer maneira
    localStorage.clear();
    console.warn("Local storage limpa!")
}

// Renderizar o elemento React no DOM
root.render(form);
