const mostrarInputTexto = () => {
    document.querySelector('#inputTexto').style.display = document.querySelector('#inputTexto').style.display == 'none' ? 'block':'none'
    document.querySelector('.addTarefa').style.display = document.querySelector('.addTarefa').style.display == 'none' ? 'block':'none'
}

const esconderInputTexto = () => {
    document.querySelector('#inputTexto').style.display = 'none'
    document.querySelector('.addTarefa').style.display = 'none'
}

document.querySelector('#iconMostrarInputTexto').addEventListener('click', mostrarInputTexto)