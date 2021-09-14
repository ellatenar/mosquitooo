import React from "react";
import Moon from "./Moon"

const Header = ({title}) => {
    return (
        <div className="title">
            <h2>{title}</h2>
            <Moon/>
        </div>
    )
}

export default Header