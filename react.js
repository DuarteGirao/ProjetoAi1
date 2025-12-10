function validarDados(nome, email, telefone, motivo, texto)
{
    if(nome == "" || email == "" || telefone == "" || motivo == "" || texto == "")
    {
        console.log("alert dados por preencher");
        alert("Ainda tem dados por prêencher!");
        return false;
    }

    let output = "";

    if(nome.length < 2 || nome.length > 50)
    {
        console.warn("Erro no nome!");
        output += "Nome inválido! (<2 ou >50)\n";
    }

    if(email.length < 5 || email.length > 50)
    {
        console.warn("Erro no email!");
        output += "Email inválido!\n";
    }
    else
    {
        let val = false;
        let j = 0;
        
        for(let i = 1; i < email.length-3; i++)
        {
            if(email[i] == '@')
            {
                val = true;
                j = i;
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

    if(motivo.length < 2 || motivo.length > 50)
    {
        console.warn("Erro no motivo!");
        output += "Motivo inválido!\n";
    }

    if(texto.length < 2 || texto.length > 250)
    {
        console.warn("Erro na mensagem!");
        output += "Corpo da mensagem inválido!\n";
    }


    if(output == "")
        return true;


    console.log("alert validacao falhou");
    alert(output);
    return false;
    
}

function submissao() 
{       
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let motivo = document.getElementById("motivo").value.trim();
    let texto = document.getElementById("texto").value.trim();

    validarDados(nome, email, telefone, motivo, texto);


}


function formulario(props){
    return React.createElement("form", {onSubmit: submissao},
        React.createElement("h3",{class: "tituloContactos"},"Contacte-nos"),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Nome: "),
            React.createElement("input",{ type: 'text', id: "nome", required: true},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Email: "),
            React.createElement("input",{ type: 'email', id: "email", required: true},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Telefone: "),
            React.createElement("input",{ type: 'tel', id: "telefone", required: true},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("hr",{class:"linhaSimples"},null),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Motivo: "),
            React.createElement("input",{ type: 'text', id: "motivo", required: true},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("label",{class:"labelInput"},"Corpo da mensagem: "),
            React.createElement("textarea",{ type: 'text', id:"texto", required: true},null),
            React.createElement("p",{ },null)
        ),

        React.createElement("div",{class:"divInput"},
            React.createElement("button",{ type: 'submit', id: "enviar", class:"ButaoEnviar"}, "Enviar")
        )
    );

}

const form = React.createElement(formulario, {
    nome:"asd",
    email:"wqe",
    telefone:"123",
    motivo:"345",
    texto:"567",

});

// Obter referência ao elemento root
const root = ReactDOM.createRoot(document.getElementById("conteudo"));

// Renderizar o elemento React no DOM
root.render(form);
