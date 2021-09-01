function relogio(){
    var data=new Date()
    var hor=data.getHours()
    var min=data.getMinutes()
    var seg=data.getSeconds()

    if(hor<10){
        hor="0"+hor
    }
    if(min<10){
        min="0"+min
    }
    if(seg<10){
        seg="0"+seg
    }            
    document.getElementById("relh").innerHTML=hor
    document.getElementById("relm").innerHTML=min
    document.getElementById("rels").innerHTML=seg
}
var tempo=setInterval(relogio,1000)

function carregar() {
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        // DIA!
        img.src = './images/manha.png'
    } else if (hora >= 12 && hora < 18) {
        // TARDE!
        img.src = './images/tarde.png'
    } else {
        // NOITE!
        img.src = './images/noite.png'
    }
}

window.addEventListener("load",carregar)