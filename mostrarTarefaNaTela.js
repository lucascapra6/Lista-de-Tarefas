//irá mostrar o que está no banco de dados
const mostrarTarefaNaTela = () => {
   limparTarefasAoAtualizarBanco() 
   const banco = getBanco()
   banco.forEach((element,indice) => criadorDeTarefas.criaTarefa(element.tarefa, element.status, indice))
   
}

