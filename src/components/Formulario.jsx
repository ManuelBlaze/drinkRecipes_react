import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { } = useContext(CategoriasContext);

    return (
        <form
            className="col-12"
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
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category" 
                    >
                        <option value="">-- Select Category --</option>
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

Formulario.propTypes = {

}

export default Formulario
