import React from "react";

const Item=({productos})=>{
  return(
    <div>
      <div>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold title-font">
          {productos.nombre}
        </h3>
        <h3 className="h-7 tracking-widest text-yellow-400 font-bold">
          {productos.autor}
        </h3>
        <span className="title-font font-medium text-black">
          <h2>${productos.precio}</h2>
        </span>
        <p className="leading-relaxed text-black">{productos.categoria}</p>
        <button className="text-indigo-500 inline-flex items-center">
          Ver más
        </button>
        <hr/>
      </div>
    </div>
  );
};

export default Item; 

