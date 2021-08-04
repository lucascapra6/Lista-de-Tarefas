class GerenciaTarefasCriadas {
    constructor() {}

    excluirTarefa(evento) {
        const tarefaSelecionada = evento.target
        if(tarefaSelecionada.type === 'button') {
            const indiceDaTarefaSelecionada = tarefaSelecionada.dataset.indice
            const banco = getBanco()
            banco.splice(indiceDaTarefaSelecionada, 1)
            setBanco(banco)
            mostrarTarefaNaTela()
        }
    }
    
    marcarConcluida(evento) { 
       const tarefaSelecionada = evento.target
       if(tarefaSelecionada.type === 'checkbox') {
           const indiceDaTarefaSelecionada = tarefaSelecionada.dataset.indice
           const banco = getBanco()
           banco[indiceDaTarefaSelecionada].status = banco[indiceDaTarefaSelecionada].status === '' ? 'checked' : ''
           setBanco(banco)
           mostrarTarefaNaTela()
       }
    }
}



const gerenciaTarefasCriadas = new GerenciaTarefasCriadas
document.querySelector('.listaDeTarefas').addEventListener('click', gerenciaTarefasCriadas.excluirTarefa)
document.querySelector('.listaDeTarefas').addEventListener('click', gerenciaTarefasCriadas.marcarConcluida)