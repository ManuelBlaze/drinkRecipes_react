import React from 'react'
import PropTypes from 'prop-types'

const Receta = ({receta}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen ${receta.strDrink}`} className="card-img-top"/>
            
                <div className="card-body">
                    <button 
                        className="btn btn-block btn-primary"
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
