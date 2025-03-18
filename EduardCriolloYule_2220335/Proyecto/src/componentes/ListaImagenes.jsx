import React from "react";

const ListaImagenes = ({imagenes}) => {
    return (
        <div style={{display: 'flex', flexWrap: ' wrap', gap: '10px'}}>
            {imagenes.map((imagen,index) => (
                <div key={index} style={{textAlign:'center'}}>
                    <img
                        src = {imagen.url}
                        alt = {imagen.title}
                        style = {{width:'200px',height:'300px'}}
                    />
                    <p>{imagen.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ListaImagenes