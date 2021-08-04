const setBanco = (banco) => localStorage.setItem('listaDeTarefas', JSON.stringify(banco)) 
const getBanco = () => JSON.parse(localStorage.getItem('listaDeTarefas')) ?? []

const mostrarTarefasNoPageReloading = () => {
    const banco = getBanco()
    banco.forEach((element,indice) => criadorDeTarefas.criaTarefa(element.tarefa, element.status, indice))
}
 
 document.querySelector('body').addEventListener('reload', mostrarTarefasNoPageReloading())