import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [busquedaRecetas, setBusquedaRecetas] = useState({
        name: '',
        category: ''
    });
    const [consultar, setConsultar] = useState(false);

    const { name, category } = busquedaRecetas;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const recetas = await axios(url);
                
                setRecetas(recetas.data.drinks);
            }
            obtenerRecetas();
        }

    }, [busquedaRecetas])

    return ( 
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaRecetas, 
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;