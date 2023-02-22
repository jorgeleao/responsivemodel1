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
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>Início</Link>

                </div>
            </div>
        </div >
    );
}
