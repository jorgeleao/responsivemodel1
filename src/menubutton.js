import React from 'react';

function MenuButton(props) {
    const auxStyle = {position:"relative", top:"2px",left:"2px",
                        border:"2px solid gray", borderRadius:"4px", backgroundColor:props.bgcolor,
                        width:"88px",height:"28px",lineHeight:"0px"
    }
    return(
    <div style={{border:"2px solid gray", borderRadius:"6px", backgroundColor:"white",width:"95px",height:"36px"}}>
        <div style={auxStyle}>
                <span style={{color:props.titleColor,position:"relative",top:"14px",fontWeight:"bold"}}>{props.titulo}</span>
        </div>
    </div>
    )
}
export default MenuButton;