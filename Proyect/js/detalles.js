let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "¿por que te fuiste?";
})

window.addEventListener('focus', () => {
    document.title = Titulo;
})





//buscador de contenido
//ejecuto fuinciin

document.getElementById("icon-search").addEventListener("click",mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click",ocultar_buscador);



//declaro variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//funcion parea mostratr bsucador
function mostrar_buscador(){
    bars_search.style.top="90px";
    cover_ctn_search.style.display="block";
    inputSearch.focus();
    bars_search.style.zIndex= "12" ;
}

//funcion para cerrar buscador
function ocultar_buscador(){
    bars_search.style.zIndex= "8" ;
    bars_search.style.top="-10px";
    cover_ctn_search.style.display="none";
inputSearch.value="";
box_search.style.display ="none";
if(inputSearch.value == ""){
    box_search.style.display ="none";
    }

}

//creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup",buscador_interno);
function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");
    
    //recorriendo elemenntos a filtrarmediante los li 
    for(i =0;i< li.length;i++){
        a=li[i].getElementsByTagName("a")[0] ;
        textValue =a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
        
        
        li[i].style.display = "";
box_search.style.display="block";
if(inputSearch.value == ""){
box_search.style.display ="none";
}

        }else{
            li[i].style.display="none"
        }
    }

}

//alertas 

//alerta de crear cuenta
window.addEventListener("load",function(){
    document.getElementById("viewAlerta").addEventListener("click", function(){
        alert("Nombre ya usado en otra cuenta,pruebe otro");
    })


})

//alerta de iniciar sesion
window.addEventListener("load",function(){
    document.getElementById("viewAlert2").addEventListener("click", function(){
        alert("No se a encontrado su correo,vuelva a intentarlo");
    })


})

//alerta de no iniciar secion
window.addEventListener("load",function(){
    document.getElementById("pepe").addEventListener("click", function(){
        alert("No has iniciado sesion, nesecita iniciar sesion para continuar con sus compras");
    })


})
window.addEventListener("load",function(){
    document.getElementById("boton3").addEventListener("click", function(){
        alert("No has iniciado sesion, nesecita iniciar sesion para continuar con sus compras");
    })


})
window.addEventListener("load",function(){
    document.getElementById("botonpp").addEventListener("click", function(){
        alert("esta pagina esta creada por:Camilo Gomez");
    })


})
//fin de las alertass