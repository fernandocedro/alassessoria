document.addEventListener('DOMContentLoaded', function() {
    const icones = document.querySelectorAll('.icone-arquivo');
    const todasCaixasExplicacao = document.querySelectorAll('.caixa-explicacao');

    icones.forEach(icone => {
        icone.addEventListener('click', function(event) {
            // Impede o clique de se propagar para o documento
            event.stopPropagation();
            
            // Pega o ID da explicação que deve ser mostrada a partir do atributo do ícone
            const explicacaoId = this.getAttribute('data-explicacao-id');
            const caixaExplicacaoAtual = document.getElementById(explicacaoId);

            // Esconde todas as outras caixas de explicação que possam estar abertas
            todasCaixasExplicacao.forEach(caixa => {
                if (caixa !== caixaExplicacaoAtual) {
                    caixa.style.display = 'none';
                }
            });

            // Alterna a visibilidade da caixa de explicação clicada
            if (caixaExplicacaoAtual.style.display === 'block') {
                caixaExplicacaoAtual.style.display = 'none';
            } else {
                caixaExplicacaoAtual.style.display = 'block';
            }
        });
    });

    // Adiciona um ouvinte de clique no documento para fechar todas as caixas se o usuário clicar em qualquer outro lugar
    document.addEventListener('click', function(event) {
        // Verifica se o clique não foi em um ícone ou em uma caixa de explicação
        const clicouEmIcone = event.target.closest('.icone-arquivo');
        const clicouEmCaixa = event.target.closest('.caixa-explicacao');
        
        if (!clicouEmIcone && !clicouEmCaixa) {
            todasCaixasExplicacao.forEach(caixa => {
                caixa.style.display = 'none';
            });
        }
    });
});