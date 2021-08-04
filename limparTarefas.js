class LimpadorDeCampos {
  constructor() {}
  limparTarefasAoAtualizarBanco() {
    const listaDeTarefas = document.querySelector("div.listaDeTarefas");
    while (listaDeTarefas.firstChild) {
      listaDeTarefas.removeChild(listaDeTarefas.lastChild);
    }
  }
  limparTodasTarefas() {
    localStorage.clear()
    document.querySelector('#inputTexto').style.display = 'none'
    document.querySelector('.addTarefa').style.display = 'none'
    mostrarTarefaNaTela()
  }
}

const limpadorDeCampos = new LimpadorDeCampos()
const limparTarefasAoAtualizarBanco = () => {
  return limpadorDeCampos.limparTarefasAoAtualizarBanco()
}

document.querySelector('#apagarTodasTarefas').addEventListener('click', limpadorDeCampos.limparTodasTarefas)

