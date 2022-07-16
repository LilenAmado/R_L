/* Buscador */

document.addEventListener("keyup", e=>{
  if (e.target.matches("#buscador")){
    if (e.key ==="Escape")e.target.value = ""
      document.querySelectorAll(".articulo").forEach(fruta =>{

        fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value.toLowerCase() !== ""
          ?fruta.classList.add("resaltarColor")
          :fruta.classList.remove("resaltarColor")
      })
  }
})

