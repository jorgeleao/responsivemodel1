import React from 'react';
import './Caixadagua.css';
import Canvas from './Canvas';

export default function Caixadagua(props) {
  const draw = (context) => {
    context.fillStyle = "rgb(186, 186, 186)";
    context.fillRect(0, 0, 149, 210);

//======== Fundo da escala =================
    context.fillStyle = "black";
    context.fillRect(30, 5, 55, 200);
//==========================================
    if(props.valor>=90){
      context.fillStyle = "red";
    }else if(props.valor<=10){
      context.fillStyle = "orange";
    }else{
      context.fillStyle = "blue";
    }
    context.fillRect(30, 205-2*props.valor, 55, 2*props.valor );
//==========================================
    context.fillStyle = "black";

    context.moveTo(30, 5);
    context.lineTo(94, 5);
    context.stroke();
    context.font = "10px monospace";
    context.fillText("100", 95, 7);

    context.moveTo(30, 205);
    context.lineTo(94, 205);
    context.stroke();
    context.font = "10px monospace";
    context.fillText("  0", 95, 206);

    for(let i=1;i<10;i++){
      context.moveTo(85, 5+i*20);
      context.lineTo(94, 5+i*20);
      context.stroke();
      context.font = "10px monospace";
      context.fillText(' '+(100-10*i).toString(), 95, 6+i*20);
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
        <Canvas draw={draw} height={225} width={140}/>
      </div>
      <div className="valor">{props.valor} %</div>
      <div className="colunas">{props.colunas}</div>
    </div>
  );
}

