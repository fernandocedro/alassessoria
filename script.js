document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Menu Mobile: CORRIGIDO O ID ---
    
    // CORREÇÃO: Busca pelo ID 'menu-toggle-button' que está no HTML atual.
    const menuToggle = document.getElementById('menu-toggle-button'); 
    
    // ID do elemento que representa o menu mobile (deve ser onde os links estão).
    const menuEscondido = document.getElementById('menu-mobile'); 

    if (menuToggle && menuEscondido) {
        // Garantir que não haja 'onclick' antigo no HTML
        menuToggle.removeAttribute('onclick'); 
        
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'visivel' no menu mobile
            menuEscondido.classList.toggle('visivel');
        });
    }

    // --- Lógica das Caixas de Explicação ---
    const icones = document.querySelectorAll('.icone-arquivo');
    const todasCaixasExplicacao = document.querySelectorAll('.caixa-explicacao');

    icones.forEach(icone => {
        icone.addEventListener('click', function(event) {
            event.stopPropagation();
            const explicacaoId = this.getAttribute('data-explicacao-id');
            const caixaExplicacaoAtual = document.getElementById(explicacaoId);

            // Fecha todas as outras caixas
            todasCaixasExplicacao.forEach(caixa => {
                if (caixa !== caixaExplicacaoAtual) {
                    caixa.style.display = 'none';
                }
            });

            // Alterna a exibição da caixa atual
            if (caixaExplicacaoAtual.style.display === 'block') {
                caixaExplicacaoAtual.style.display = 'none';
            } else {
                caixaExplicacaoAtual.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function(event) {
        const clicouEmIcone = event.target.closest('.icone-arquivo');
        const clicouEmCaixa = event.target.closest('.caixa-explicacao');
        
        // Se o clique não foi em um ícone ou em uma caixa de explicação, fecha as caixas.
        if (!clicouEmIcone && !clicouEmCaixa) {
            todasCaixasExplicacao.forEach(caixa => {
                caixa.style.display = 'none';
            });
        }
        
        // NOTA: Para garantir que o menu mobile não feche ao clicar fora
        // enquanto estiver aberto, você deve gerenciar isso com uma condição
        // que verifica se o menu está visível e se o clique foi fora dele.
    });
});