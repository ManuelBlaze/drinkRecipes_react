import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

//Crear el Context
export const CategoriasContext = createContext();

//Provider es donde se encuentra las funciones y state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [categoria, setCategoria] = useState([]);

    //Ejecutar el llamado a la API
    
    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;