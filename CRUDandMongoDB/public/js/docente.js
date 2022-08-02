const modalDocente=new bootstrap.Modal(document.getElementById('modalDocente'))

const on = (element,event,selector,handler)=>{
    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document,"click",".btnEditarDoc",e=>{
    console.log("si entro")
    const fila=e.target.parentNode.parentNode
    e_id.value = fila.children[0].innerHTML
    e_cod.value = fila.children[1].innerHTML
    e_nom.value = fila.children[2].innerHTML
    e_ape.value = fila.children[3].innerHTML
    e_cor.value = fila.children[4].innerHTML
    e_tel.value = fila.children[5].innerHTML
    modalDocente.show();
})