import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

//crear Cntext
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del provider
    const [idreceta, setIdreceta] = useState(null);
    const [recetaMod, setRecetaMod] = useState({});

    //Llamado a la API
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios(url);

            setRecetaMod(resultado.data.drinks[0]);
        }
        obtenerReceta();

    }, [idreceta])

    return ( 
        <ModalContext.Provider
            value={{
                recetaMod,
                setRecetaMod,
                setIdreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;