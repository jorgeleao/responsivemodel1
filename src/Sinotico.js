import React, { useEffect, useState } from "react";
import './Sinotico.css';
import './common.css'
import Caixadagua from './Caixadagua';

let interval = undefined;
let goingUP = true

export default function Sinotico(props) {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1.);
      }, 1000);
    } else {
      clearInterval(interval);
      setProgress(0);
    }
  }, [running]);

  useEffect(() => {
    console.log('=== progress='+progress)
    if(niveis[0]<99 && goingUP){
      nivelUP(0)
    }else if(niveis[0]>=100 && goingUP){
      goingUP=!goingUP
    }else if(niveis[0]>0 && !goingUP){
      nivelDW(0)
    }else if(niveis[0]<=0 && !goingUP){
      goingUP=!goingUP
    }  
    if(progress>100) setProgress(0)
  }, [progress]);

  let niveisIniciais = [0,20,30,40,50]
  let[ niveis,setNiveis] = useState(niveisIniciais)

  const nivelUP = (caixa) => {
    const proxNiveis = niveis.map((nivel,i) => {
      if(i === caixa){
        return (nivel+5)>100?100:nivel+5;
      }else{
        return nivel;
      }
    })
    setNiveis(proxNiveis)
  }

  const nivelDW = (caixa) => {
    const proxNiveis = niveis.map((nivel,i) => {
      if(i === caixa){
        return (nivel-5)<0?0:nivel-5;
      }else{
        return nivel;
      }
    })
    setNiveis(proxNiveis)
  }

  return (
    <div>

    <div className="sinotico">
        <div className="common_divcontainer">
          <div style={{gridRow:"3/3",gridColumn:"1/1"}}><Caixadagua estadoBoia={true} colunas='COLUNAS 08 - 01' valor={niveis[0]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"2/2"}}><Caixadagua estadoBoia={false} colunas='COLUNAS 02 - 03' valor={niveis[1]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"2/4",gridColumn:"3/3"}}><Caixadagua estadoBoia={true} colunas='CAIXA CENTRAL' valor={niveis[2]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"4/4"}}><Caixadagua estadoBoia={false} colunas='COLUNAS 04 - 05' valor={niveis[3]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"5/5"}}><Caixadagua estadoBoia={false} colunas='COLUNAS 06 - 07' valor={niveis[4]} valormin='10' valormax='90'/></div>
          
          <div style={{gridRow:"4/4",gridColumn:"1/1",textAlign:'center'}}>
            <button style={{height:'30px'}} onClick={()=>nivelUP(0)}>Up</button> 
            <button style={{height:'30px'}} onClick={()=>nivelDW(0)}>Dw</button>
          </div>
          <div style={{gridRow:"4/4",gridColumn:"2/2",textAlign:'center'}}>
            <button style={{height:'30px'}} onClick={()=>nivelUP(1)}>Up</button> 
            <button style={{height:'30px'}} onClick={()=>nivelDW(1)}>Dw</button>
          </div>
          <div style={{gridRow:"4/4",gridColumn:"3/3",textAlign:'center'}}>
            <button style={{height:'30px'}} onClick={()=>nivelUP(2)}>Up</button> 
            <button style={{height:'30px'}} onClick={()=>nivelDW(2)}>Dw</button>
          </div>
          <div style={{gridRow:"4/4",gridColumn:"4/4",textAlign:'center'}}>
            <button style={{height:'30px'}} onClick={()=>nivelUP(3)}>Up</button> 
            <button style={{height:'30px'}} onClick={()=>nivelDW(3)}>Dw</button>
          </div>
          <div style={{gridRow:"4/4",gridColumn:"5/5",textAlign:'center'}}>
            <button style={{height:'30px'}} onClick={()=>nivelUP(4)}>Up</button> 
            <button style={{height:'30px'}} onClick={()=>nivelDW(4)}>Dw</button>
          </div>
        </div>
    </div>

    </div>
  )
}  

