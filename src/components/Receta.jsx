import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from "../context/ModalContext";

const Receta = ({receta}) => {

    //Extraer valores del context
    const { setIdreceta }  = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen ${receta.strDrink}`} className="card-img-top"/>
            
                <div className="card-body">
                    <button 
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdreceta(receta.idDrink)
                        }}
                    >
                        See Recipe
                    </button>
                </div>
            </div>
        </div>
    )
}

Receta.propTypes = {
    receta: PropTypes.object.isRequired
}

export default Receta
