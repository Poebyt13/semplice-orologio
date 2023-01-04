
let ora = document.querySelector(".hour");
let minuto = document.querySelector(".minute");
let secondo = document.querySelector(".second");
let info = document.querySelector(".info__orario");

const infoOrario = ()=>{
    if (ora.innerHTML >= 0 && ora.innerHTML <= 12) {
        info.innerHTML = "";
        info.innerHTML += "AM"
    } else if (ora.innerHTML > 12 && ora.innerHTML < 24) {
        info.innerHTML = "";
        info.innerHTML = "PM"
    }
}

setTimeout(() => {
    let informacion = new Date();
    ora.innerHTML = informacion.getHours();  
    minuto.innerHTML = informacion.getMinutes();
    secondo.innerHTML = informacion.getSeconds();
    dueNumeri(ora);
    dueNumeri(minuto);
    dueNumeri(secondo);
    infoOrario();
}, 10);

setInterval(() => {
    prendereOrario();

}, 1000);



const prendereOrario = ()=>{
    let informacion = new Date();

    ora.innerHTML = "";
    minuto.innerHTML = "";
    secondo.innerHTML = "";

    ora.innerHTML = informacion.getHours();

    infoOrario();

    minuto.innerHTML = informacion.getMinutes();
    secondo.innerHTML = informacion.getSeconds();
    dueNumeri(ora);
    dueNumeri(minuto);
    dueNumeri(secondo);
}

const dueNumeri = (valor)=>{
    let zero = "0";
    if (valor.innerHTML.length == 1) {
        zero += valor.innerHTML;
        valor.innerHTML = zero;
    }
}