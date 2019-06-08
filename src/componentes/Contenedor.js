import React from "react";
import ListadoPanes from "./ListadoPanes";
import PreciosPanes from "./PreciosPanes";


const Contenedor = () => (
 <div className="contenedor">
    <div> Linea de Tiempo</div>
    <div className="contenido">   
        <ListadoPanes></ListadoPanes>
        <PreciosPanes></PreciosPanes>
        </div>
     <div> 
         
         </div>   
    </div>


);
  
export default Contenedor;