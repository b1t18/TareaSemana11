const modalNota = new bootstrap.Modal(document.getElementById('modalNota'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditarNota', e => {
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_idAlu.value = fila.children[1].innerHTML
    e_idCur.value = fila.children[2].innerHTML
    e_idAul.value = fila.children[3].innerHTML
    e_idDoc.value = fila.children[4].innerHTML
    e_pra.value = fila.children[5].innerHTML
    e_par.value = fila.children[6].innerHTML
    e_fin.value = fila.children[7].innerHTML
    modalNota.show();
})