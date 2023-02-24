import React from 'react';

function MenuButton(props) {
    const auxStyle = {position:"relative", top:"2px",left:"2px",
                        border:"2px solid gray", borderRadius:"10px", backgroundColor:props.bgcolor,
                        width:"88px",height:"28px",lineHeight:"0px"
    }
    return(
    <div style={{border:"2px solid gray", borderRadius:"13px", backgroundColor:"white",width:"95px",height:"36px"}}>
        <div style={auxStyle}>
                <span style={{color:"white",position:"relative",top:"14px",fontWeight:"bold"}}>{props.titulo}</span>
        </div>
    </div>
    )
}
export default MenuButton;