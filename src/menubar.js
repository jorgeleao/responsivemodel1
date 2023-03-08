import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import './menubar.css'
import MenuButton from './menubutton'


export default function Menubar() {
    const location = useLocation();
    return (
        <div className="menubar">
            <div className="menuitems">
                <div className="search-catalog">
                    <Link to="/" className={location.pathname === "/" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                            <MenuButton 
                                titleColor={location.pathname === "/" ? "white" : "gray"} 
                                bgcolor={location.pathname === "/" ? "blue" : "rgb(42, 42, 42)"} 
                                titulo="SINÓTICO"/>
                    </Link>

                    <Link to="/grafico" className={location.pathname === "/grafico" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                            <MenuButton
                                titleColor={location.pathname === "/grafico" ? "white" : "gray"}  
                                bgcolor={location.pathname === "/grafico" ? "green" : "rgb(42, 42, 42)"} 
                                titulo="GRÁFICO"/>
                    </Link>

                    <Link to="/events" className={location.pathname === "/events" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                            <MenuButton 
                                titleColor={location.pathname === "/events" ? "white" : "gray"} 
                                bgcolor={location.pathname === "/events" ? "red" : "rgb(42, 42, 42)"} 
                                titulo="EVENTOS"/>
                    </Link>
                    
                </div>
            </div>
            <div className="companyName">
                <a href="https://www.altatecnologiaprojetos.com.br" rel="noreferrer" target="_blank"
                   style={{fontSize:'1.5em',fontStyle:'italic',fontWeight:"200",color:"white"}}>
                    Alta Tecnologia Projetos
                </a>
            </div>
        </div >
    );
}
