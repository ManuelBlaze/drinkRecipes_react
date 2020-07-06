import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        name: '',
        category: ''
    })

    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

    //Leer el contenido de seleccion
    const obtenerDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setBusquedaRecetas(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by Category or Ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        placeholder="Search by Ingredient"
                        onChange={obtenerDatos}
                        />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category" 
                        onChange={obtenerDatos}
                    >
                        <option value="">-- Select Category --</option>
                        {categorias.map( categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        value="Search Drink" 
                        className="btn btn-block btn-primary"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
