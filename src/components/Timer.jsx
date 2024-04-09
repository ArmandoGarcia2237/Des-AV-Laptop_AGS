import React, { useEffect, useState } from 'react'
import './Timer.css';

const Timer = () => {

const [seconds,Setseconds]=useState(0);
const [minutes,Setminutes]=useState(0);

var timer;
useEffect(()=>{

timer= setInterval(()=>{
    Setseconds(seconds+1)

    if(seconds===59){
        Setminutes(minutes+1);
        Setseconds(0);
    }
},1000)

return ()=> clearInterval(timer);

});


const restart=()=>{

    Setseconds(0);
    Setminutes(0);

}

const stop=()=>{

    clearInterval(timer);

}

  return (
    <div className='timer' class="rounded shadow bg-primary text-white" id="time">
        <div className='container'>
            <div className='timer-container' class="rounded p-5">
                <h1> Temporizador </h1>
                <h1 class="display-5">{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>

                <button id="bt" type="button" class="btn btn-dark rounded" className='restart' onClick={restart}>Resetear</button>
                <button id="bt" type="button" class="btn btn-dark rounded" className='stop' onClick={stop}>Detener</button>

            </div>
        </div>
    </div>
  )
}

export default Timer