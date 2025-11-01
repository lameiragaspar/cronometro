//Pegando ele elementos
let start = document.getElementById("start");
let miliSeconds = document.getElementById("mili-seconds");
let restart = document.getElementById("restart");
let hora = document.getElementById("hora");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
//Controla do DOM esperando o evento, click no caso
start.addEventListener('click', startCont);
restart.addEventListener('click', restartCot)
let cont = 0;
let contSecond = 0;
let contMinutes = 0;
let contHora = 0;
let interval = null;
const fulltime = 59

function startCont () {
    //window.alert("Botão de iniciar clicado");
    if(start.id === "start"){
        start.removeAttribute("id")
        start.id = "stop"
        start.innerText = "Pause"
        interval = setInterval (() =>{
            cont += 1;
            if(cont > 99){
                cont = 0 //reinicia a contagem dos mili-segundos
                contSecond += 1
                if(contSecond > fulltime){
                    contSecond = 0 //reinicia a contagem dos segundos
                    contMinutes += 1
                    if(contMinutes > fulltime){
                        contMinutes = 0
                        contHora += 1
                        if(contHora > 23){
                            hora.innerText = "00"
                            minute.innerText = "00"
                            second.innerText = "00"
                            miliSeconds.innerText = '.00'
                        }
                    }
                    hora.innerText = String(contHora).padStart(2, 0)
                }
                minute.innerText = String(contMinutes).padStart(2, 0)
            }
            second.innerText = String(contSecond).padStart(2, 0)
            miliSeconds.innerText = '.' + String(cont).padStart(2, 0);//Muda o valor do contador pra string e formata para .001, .002...
        }, 1)
        
    }else{
        start.removeAttribute("id");
        start.id = "start"
        start.innerText = "Start"
        clearInterval(interval)
    }
}

function restartCot () {
    hora.innerText = "00"
    minute.innerText = "00"
    second.innerText = "00"
    miliSeconds.innerText = '.000'
}