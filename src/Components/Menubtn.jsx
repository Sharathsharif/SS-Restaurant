import React from "react";
import { Link } from "react-router-dom";


export function Menubtn(){
    return(
<div>
    <Link to= '/menu'>
    <button type="Button" className="btn btn-success btn-lg" >
        Full Menu
    </button>
    </Link>
</div>
    )
}