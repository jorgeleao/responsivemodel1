import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import './menubar.css'


export default function Menubar() {
    const location = useLocation();
    return (
        <div className="menubar">
            <div className="menuitems">
                <div className="search-catalog">
                    <Link to="/" className={location.pathname === "/" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>Sinótico</Link>

                    <Link to="/grafico" className={location.pathname === "/grafico" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>Gráfico</Link>

                    <Link to="/events" className={location.pathname === "/events" ?
                                            "spacer menuitemselected" : "spacer menuitemNOTselected"}>Eventos</Link>

                </div>
            </div>
        </div >
    );
}
