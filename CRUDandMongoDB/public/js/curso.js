const modalCurso = new bootstrap.Modal(document.getElementById('modalCurso'))

const on = (element,event,selector,handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector))
        {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditarCurso', e => {
    console.log("si entro")
    const fila = e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_codigo.value = fila.children[1].innerHTML
    e_curso.value = fila.children[2].innerHTML
    e_credito.value = fila.children[3].innerHTML
    e_preRequisito.value = fila.children[4].innerHTML

    modalCurso.show();
})