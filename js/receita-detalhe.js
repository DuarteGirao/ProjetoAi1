document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const receitaId = urlParams.get('id');
    
    const container = document.getElementById('receita-container');
    
    if (!receitaId || !receitasDB[receitaId]) {
        container.innerHTML = `
            <div class="receita-detalhe">
                <h1 style="text-align: center; color: #e77338;">Receita não encontrada</h1>
                <p style="text-align: center; font-size: 1.2rem; margin: 20px 0;">
                    Desculpe, a receita que procura não existe ou foi removida.
                </p>
                <div style="text-align: center;">
                    <a href="receitas.html" class="btn-voltar">
                        <i class="fas fa-arrow-left"></i> Voltar às Receitas
                    </a>
                </div>
            </div>
        `;
        return;
    }
    
    const receita = receitasDB[receitaId];
    
    document.title = `${receita.nome} - MyRecipeList`;
    
    let ingredientesHTML = '';
    receita.ingredientes.forEach(ingrediente => {
        ingredientesHTML += `<li>${ingrediente}</li>`;
    });
    
    let passosHTML = '';
    receita.passos.forEach(passo => {
        passosHTML += `<li>${passo}</li>`;
    });
    
    container.innerHTML = `
        <div class="receita-detalhe">
            <a href="receitas.html" class="btn-voltar">
                <i class="fas fa-arrow-left"></i> Voltar às Receitas
            </a>
            
            <div class="receita-header">
                <h1>${receita.nome}</h1>
                <span class="tempo-detalhe">
                    <i class="far fa-clock"></i> ${receita.tempo}
                </span>
            </div>
            
            <img src="${receita.imagem}" alt="${receita.nome}" class="receita-imagem-principal">
            
            <p class="receita-descricao">${receita.descricao}</p>
            
            <div class="receita-info">
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>${receita.tempo}</div>
                    <strong>Tempo</strong>
                </div>
                <div class="info-item">
                    <i class="fas fa-signal"></i>
                    <div>${receita.dificuldade}</div>
                    <strong>Dificuldade</strong>
                </div>
                <div class="info-item">
                    <i class="fas fa-users"></i>
                    <div>${receita.porcoes}</div>
                    <strong>Porções</strong>
                </div>
            </div>
            
            <div class="receita-secao">
                <h2><i class="fas fa-shopping-basket"></i> Ingredientes</h2>
                <ul class="ingredientes-lista">
                    ${ingredientesHTML}
                </ul>
            </div>
            
            <div class="receita-secao">
                <h2><i class="fas fa-list-ol"></i> Modo de Preparação</h2>
                <ol class="passos-lista">
                    ${passosHTML}
                </ol>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <a href="receitas.html" class="btn-voltar">
                    <i class="fas fa-arrow-left"></i> Voltar às Receitas
                </a>
            </div>
        </div>
    `;
});
