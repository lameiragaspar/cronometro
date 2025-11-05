//Pegando ele elementos
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let voltas = document.getElementById("turns");
let nVoltas = document.getElementById("Nturns")
let miliSeconds = document.getElementById("mili-seconds");
let hora = document.getElementById("hora");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

//Variaveis de controle
//Relógio Principal
let tempoInicial = 0;
let tempoAcumulado = 0;

//Tempo de Volta
let tempoInicialVoltas = 0;
let tempoAcumuladoVoltas = 0;

let numVoltas = 0;
let rodando = false;
let animationId = null;

//Tempo atual

//Atualizando o display com base no tempo real
const atualizarTempo = () =>{
    const agora = performance.now();
    const tempoDecorrido = agora - tempoInicial + tempoAcumulado;

    const horas = Math.floor(tempoDecorrido / 3600000); // 1hora = 3600.000 milisegundos
    const minutos = Math.floor((tempoDecorrido % 3600000) / 60000);
    const segundos = Math.floor((tempoDecorrido % 60000) / 1000);
    const milisegundos = Math.floor((tempoDecorrido % 1000) / 10);

    //Renderizando os valores
    hora.innerText = String(horas).padStart(2, "0");
    minute.innerText = String(minutos).padStart(2, "0");
    second.innerText = String(segundos).padStart(2, "0");
    miliSeconds.innerText = "." + String(milisegundos).padStart(2, "0");

    if(rodando){
        animationId = requestAnimationFrame(atualizarTempo);
    }
}

//Start Pause
function startCont () {
    //window.alert("Botão de iniciar clicado");
    if(!rodando){
        //Start
        rodando = true;
        tempoInicial = performance.now();
        tempoInicialVoltas = performance.now();
        start.id = "stop";
        start.innerText = "Pause";
        animationId = requestAnimationFrame(atualizarTempo);
    } else{
        //Pause
        rodando = false;
        tempoAcumulado += performance.now() - tempoInicial;
        tempoAcumuladoVoltas += performance.now() - tempoInicialVoltas;
        start.id = "start";
        start.innerText = "Start";
        cancelAnimationFrame(animationId);
    }
}
//Turns
function guardarVolta(){
    if(start.id === "start"){
        alert("Inicie o Cronômetro!");
        return;
    }

    nVoltas.className = "voltas";
    numVoltas++; 
    const agora = performance.now();
    const tempoDeVolta = agora - tempoInicialVoltas + tempoAcumuladoVoltas;

    const horaVolta = Math.floor(tempoDeVolta / 3600000);
    const minVolta = Math.floor((tempoDeVolta % 3600000) / 60000)
    const segVolta = Math.floor((tempoDeVolta % 60000 / 1000))
    const miliSvolta = Math.floor((tempoDeVolta % 1000) / 10) //Sentezimo, para duas casas decimais

    const tempoFormatado = `${String(horaVolta).padStart(2, "0")}:${String(minVolta).padStart(2, "0")}:${String(segVolta).padStart(2, "0")}:${String(miliSvolta).padStart(2, "0")}`;

    let div2 =document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p2.className = "tempo"
    p1.innerText = numVoltas;
    p2.innerText = tempoFormatado;
    //tempoDeCadaVolta = p2.innerText
    div2.appendChild(p1);
    div2.appendChild(p2);

    if(nVoltas.innerText === ""){
        //Cria os elementos e atribui valores
        let div1 = document.createElement('div')
        let _1h4 = document.createElement('h4')
        let _2h4 = document.createElement('h4')
        _1h4.innerText = "Voltas"
        _2h4.innerText = "Tempo"
        //Renderiza no DOM
        div1.appendChild(_1h4)
        div1.appendChild(_2h4)
        nVoltas.appendChild(div1)
    }
    //nVoltas.innerHTML += div2.innerHTML
    nVoltas.appendChild(div2)
    //console.log(nVoltas)
    tempoInicialVoltas = performance.now();
    tempoAcumuladoVoltas = 0;

    maiorTempoDeVolta();
}

//Restart
function restartCont () {
    rodando = false;
    tempoInicial = 0;
    tempoAcumulado = 0;
    numVoltas = 0
    cancelAnimationFrame(animationId);
    hora.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    miliSeconds.innerText = '.00';
    start.id = "start";
    start.innerText = "Start";
    nVoltas.className = ""
    nVoltas.innerText = ""

}

const maiorTempoDeVolta = () =>{
    let tempoDeCadaVolta = Array.from(document.getElementsByClassName("tempo"))
    console.log(tempoDeCadaVolta)

    function imprimirTempoDeCadaVolta(tempoPorVolta){
        console.log(tempoPorVolta)
    }

    tempoDeCadaVolta.forEach(imprimirTempoDeCadaVolta)
}

//Controla do DOM esperando o evento, click no caso
start.addEventListener('click', startCont);
restart.addEventListener('click', restartCont);
voltas.addEventListener('click', guardarVolta)