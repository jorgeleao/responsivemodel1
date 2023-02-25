import React from 'react';
import './Caixadagua.css';
import Canvas from './Canvas';

export default function Caixadagua(props) {
  const draw = (context) => {
    context.fillStyle = "rgb(186, 186, 186)";
    context.fillRect(0, 0, 130, 145);

//======== Fundo da escala =================
    context.fillStyle = "black";
    context.fillRect(30, 20, 55, 200);
//==========================================
    if(props.valor>=90){
      context.fillStyle = "red";
    }else if(props.valor<=10){
      context.fillStyle = "orange";
    }else{
      context.fillStyle = "blue";
    }
    context.fillRect(30, 220-2*props.valor, 55, 2*props.valor );
//==========================================
    context.fillStyle = "black";

    context.moveTo(30, 20);
    context.lineTo(94, 20);
    context.stroke();
    context.font = "10px monospace";
    context.fillText("100", 95, 21);

    context.moveTo(30, 220);
    context.lineTo(94, 220);
    context.stroke();
    context.font = "10px monospace";
    context.fillText("  0", 95, 221);

    for(let i=1;i<10;i++){
      context.moveTo(85, 20+i*20);
      context.lineTo(94, 20+i*20);
      context.stroke();
      context.font = "10px monospace";
      context.fillText(' '+(100-10*i).toString(), 95, 21+i*20);
    }
  }; // Example taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

  return (
    <div className="App2">
      <div className="topo">
        <div className="boia"><img src={`${props.estadoBoia?"Boia.down.png":"Boia.up.png"}`} alt="" width="55" height="45"/></div>
        <div>Bóia<br/>
          <div className="estado-boia"
              style={{backgroundColor:`${props.estadoBoia?"rgb(2, 252, 19)":"red"}`,
                      color:`${props.estadoBoia?"black":"white"}`}}>
            {props.estadoBoia?'ABERTA':'FECHADA'}
          </div>
        </div>
      </div>
      <div className="nivel">
        <Canvas draw={draw} height={245} width={140}/>
      </div>
      <div className="valor">{props.valor} %</div>
      <div className="colunas">{props.colunas}</div>
    </div>
  );
}

