function scroll_comercial(){
    var comercial = document.getElementById("mComercial")
    var coordenadas =  comercial.getBoundingClientRect()
    var ycomercial = coordenadas.y -180
    window.scrollTo(0,ycomercial);
 }

function scroll_residencial(){
    scroll_comercial()
    var residencial = document.getElementById("mResidencial")
    var coordenadas =  residencial.getBoundingClientRect()
    var yresidencial = coordenadas.y -150
    window.scrollTo(0,yresidencial);
 }

 function scroll_sobre(){
    var footer = document.getElementById("sobre")
    var coordenadas =  footer.getBoundingClientRect()
    var yfooter = coordenadas.y +10000
    window.scrollTo(0,yfooter);
 }
