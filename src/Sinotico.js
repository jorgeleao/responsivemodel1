import React, { useState }  from 'react';
import './Sinotico.css';
import './common.css'
import Caixadagua from './Caixadagua';

export default function Sinotico(props) {
  let niveisIniciais = [10,20,30,40,50]
  let[ niveis,setNiveis] = useState(niveisIniciais)

  let nivelUP = (caixa) => {
    const proxNiveis = niveis.map((nivel,i) => {
      if(i === caixa){
        return (nivel+5)>100?100:nivel+5;
      }else{
        return nivel;
      }
    })
    setNiveis(proxNiveis)
  }

  let nivelDW = (caixa) => {
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
        <span style={{fontSize:'1.5em',fontWeight:"200",color:"white"}}><i>Alta Tecnologia Projetos</i></span>
        <br/>
        <span style={{fontSize:'1.5em',fontWeight:"500",color:"white"}}>Condomínio Senador Paula</span>
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

