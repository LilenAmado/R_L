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

// LIST - content:

/*
ID list: 
- DW
- PowerBI
- SQL
- GIT

ID content:
- DW_content
- PowerBI_content
- SQL_content
- GIT_content
*/

let li_DW = $('#DW');
let li_PowerBI = $('#PowerBI');
let li_SQL = $('#SQL');
let li_GIT = $('#GIT');

let DW_content = $('#DW_content');
let PowerBI_content = $('#PowerBI_content');
let SQL_content = $('#SQL_content');
let GIT_content = $('#GIT_content');

let resumenes = $('#resumenes');
let bienvenido = $('#bienvenido');

resumenes.hide();
bienvenido.show();

li_DW.click(()=>{

  resumenes.show();
  bienvenido.hide();

  PowerBI_content.hide();
  SQL_content.hide();
  GIT_content.hide();

  DW_content.show();

});

li_PowerBI.click(()=>{
  
  resumenes.show();
  bienvenido.hide();

  SQL_content.hide();
  GIT_content.hide();
  DW_content.hide();

  PowerBI_content.show();
});

li_SQL.click(()=>{
  
  resumenes.show();
  bienvenido.hide();
  
  PowerBI_content.hide();
  DW_content.hide();
  GIT_content.hide();

  SQL_content.show();
});

li_GIT.click(()=>{
  
  resumenes.show();
  bienvenido.hide();

  PowerBI_content.hide();
  SQL_content.hide();
  DW_content.hide();

  GIT_content.show();
});