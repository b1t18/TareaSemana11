const modalAula = new bootstrap.Modal(document.getElementById('modalAula'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_aul.value = fila.children[1].innerHTML
    e_nom.value = fila.children[2].innerHTML
    e_afor.value = fila.children[3].innerHTML
    modalAula.show();
})