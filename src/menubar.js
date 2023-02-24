import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import './menubar.css'
import RedButton from './botao.vermelho.png'


export default function Menubar() {
    const location = useLocation();
    return (
        <div className="menubar">
            <div className="menuitems">
                <div className="search-catalog">
                

                    <Link to="/" className={location.pathname === "/" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                        <div style={{
                        border:"2px solid gray", borderRadius:"13px", backgroundColor:"white",
                        width:"128px",height:"38px"
                        }}>
                        <div style={{
                        position:"relative", top:"2px",left:"2px",
                        border:"2px solid gray", borderRadius:"10px", backgroundColor:"red",
                        width:"120px",height:"31px",lineHeight:"0px"
                        }}>
                        <span style={{color:"white",position:"relative",top:"14px",fontWeight:"bold"}}>SINÓTICO</span>
                        </div>
                        </div>
                    </Link>

                    <Link to="/grafico" className={location.pathname === "/grafico" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                        <div style={{
                        border:"2px solid gray", borderRadius:"13px", backgroundColor:"white",
                        width:"128px",height:"38px"
                        }}>
                        <div style={{
                        position:"relative", top:"2px",left:"2px",
                        border:"2px solid gray", borderRadius:"10px", backgroundColor:"rgb(0,255,0)",
                        width:"120px",height:"31px",lineHeight:"0px"
                        }}>
                        <span style={{color:"black",position:"relative",top:"14px",fontWeight:"bold"}}>GRÁFICOS</span>
                        </div>
                        </div>
                    </Link>

                    <Link to="/events" className={location.pathname === "/events" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                        <div style={{
                        border:"2px solid gray", borderRadius:"13px", backgroundColor:"white",
                        width:"128px",height:"38px"
                        }}>
                        <div style={{
                        position:"relative", top:"2px",left:"2px",
                        border:"2px solid gray", borderRadius:"10px", backgroundColor:"rgb(100,100,100,0.5)",
                        width:"120px",height:"31px",lineHeight:"0px"
                        }}>
                        <span style={{color:"gray",position:"relative",top:"14px",fontWeight:"bold"}}>EVENTOS</span>
                        </div>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div >
    );
}
