import React, { useEffect, useState, useCallback } from "react";
import './Sinotico.css';
import './common.css'
import Caixadagua from './Caixadagua';

let interval = undefined
const timeInterval = 200
let initialGoingUP = [true,false,true,false,true]
const initialAmount = [5.0,4.0,3.0,2.0,1.0]

export default function Sinotico(props) {
  let niveisIniciais = [50,20,30,40,50]
  const [niveis, setNiveis] = useState(niveisIniciais)
  const [goingUP, setGoingUP] = useState(initialGoingUP)

  const handleChangeLevel = useCallback((amount) => {
    function notGoingUP(cx){
      const nextGoingUP = goingUP.map((going,i) => {
        return (i===cx)?!going:going
      })
      setGoingUP(nextGoingUP)
    }

    const proxNiveis = niveis.map((nivel,i) => {
      let level = 0
      if(goingUP[i]){
        if((nivel+amount[i])>100)notGoingUP(i)
        level = ((nivel+amount[i])>100?100:nivel+amount[i])
      }else if(!goingUP[i]){
        if((nivel-amount[i])<0)notGoingUP(i)
        level = ((nivel-amount[i])<0?0:nivel-amount[i])
      }
      return level
    })  
    console.log(proxNiveis)
    setNiveis(proxNiveis)
  },[niveis,goingUP])

  useEffect(() => {
        interval = setInterval(() => {
          handleChangeLevel(initialAmount)
      }, timeInterval);
      
      return () => clearInterval(interval)
  }, [handleChangeLevel]);

  return (
    <div>

    <div className="sinotico">
        <div className="common_divcontainer">
          <div style={{gridRow:"3/3",gridColumn:"1/1"}}>
            <Caixadagua estadoBoia={(niveis[0]>=95)?false:true} colunas='COLUNAS 08 - 01' valor={niveis[0]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"2/2"}}>
            <Caixadagua estadoBoia={(niveis[1]>=95)?false:true} colunas='COLUNAS 02 - 03' valor={niveis[1]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"2/4",gridColumn:"3/3"}}>
            <Caixadagua estadoBoia={(niveis[2]>=95)?false:true} colunas='CAIXA CENTRAL' valor={niveis[2]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"4/4"}}>
            <Caixadagua estadoBoia={(niveis[3]>=95)?false:true} colunas='COLUNAS 04 - 05' valor={niveis[3]} valormin='10' valormax='90'/></div>
          <div style={{gridRow:"3/3",gridColumn:"5/5"}}>
            <Caixadagua estadoBoia={(niveis[4]>=95)?false:true} colunas='COLUNAS 06 - 07' valor={niveis[4]} valormin='10' valormax='90'/></div>
        </div>
    </div>

    </div>
  )
}  

