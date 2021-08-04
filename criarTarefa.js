


class CriaTarefa {
  constructor() {}
 
  criaTarefa(tarefa, status, indice) {
    //cria nova classe como se estivesse criando diretamente no HTML
    if(!tarefa) {
      return false
    }
    const criarTarefa = document.createElement("div");
    criarTarefa.classList.add("criarTarefa");
    document.querySelector('div.listaDeTarefas').appendChild(criarTarefa)
    criarTarefa.innerHTML = `
            <input type="button" value="x" id="fecharTarefa" data-indice=${indice}>
            <label>
            <div class="tarefaCriada">
            <input type="checkbox" ${status} id="status" data-indice=${indice}>
            ${tarefa}
            </div>
            </label>
            `
  }
  enviaTarefasProBancoDeDados(evento) {
    const click = evento.target
    const tecla = evento.keypress
    if(tecla === 'Enter' || click) {
      const capturarTexto = document.querySelector("input#inputTexto")
      const banco = getBanco()
      banco.push({'tarefa': capturarTexto.value , 'status' : ''})
      setBanco(banco)
      mostrarTarefaNaTela()
      capturarTexto.value = ''
      esconderInputTexto()
    }
  }
}

const getText = () => document.querySelector("input#inputTexto").value;

const criadorDeTarefas = new CriaTarefa();
const criaTarefa = (tarefa,status,indice) => {
  tarefa = getText();
  return criadorDeTarefas.criaTarefa(tarefa,status,indice);
};

const addTarefa = document.querySelector('.addTarefa')
const iterarSobreEventos = ['click','keypress'].forEach( evt => 
  addTarefa.addEventListener(evt, criadorDeTarefas.enviaTarefasProBancoDeDados, false)
);







