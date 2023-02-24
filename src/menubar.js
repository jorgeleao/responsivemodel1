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
                            <MenuButton bgcolor={location.pathname === "/" ? "BLUE" : "gray"} titulo="SINÓTICO"/>
                    </Link>

                    <Link to="/grafico" className={location.pathname === "/grafico" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                            <MenuButton bgcolor={location.pathname === "/grafico" ? "green" : "gray"} titulo="GRÁFICO"/>
                    </Link>

                    <Link to="/events" className={location.pathname === "/events" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>
                            <MenuButton bgcolor={location.pathname === "/events" ? "red" : "gray"} titulo="EVENTOS"/>
                    </Link>
                    
                </div>
            </div>
        </div >
    );
}
