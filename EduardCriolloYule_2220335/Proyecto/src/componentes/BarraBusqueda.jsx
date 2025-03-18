import React from "react";

const BarraBusqueda = ({setSearchTitle}) => {
    const handleChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar Imagén"
                onChange = {handleChange}
            />
        </div>
    );
};

export default BarraBusqueda;