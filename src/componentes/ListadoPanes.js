import React from "react";
import PreciosPanes from "./PreciosPanes";

const ListadoPanes=()=>(
    <div className="listadopanes">
        <div>
            <h2>listado de panes</h2>
        </div>
        <div>
           
        </div>
        <div>
            <PreciosPanes nombrepanes="ciabata">/></PreciosPanes>
            <PreciosPanes nombrepanes="frances" ></PreciosPanes>
            <PreciosPanes nombrepanes="caracol" ></PreciosPanes>
     
        </div>
    
    </div>
    
);
export default ListadoPanes;  