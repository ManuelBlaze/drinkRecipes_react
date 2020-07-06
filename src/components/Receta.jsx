import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 600,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Receta = ({receta}) => {

    //Configuración del modal material-UI
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

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
                            setIdreceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        See Recipe
                    </button>


                    <Modal
                        open={open}
                        onClose={() => {
                            setIdreceta(null);
                            handleClose();
                        }}
                    > 
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

Receta.propTypes = {
    receta: PropTypes.object.isRequired
}

export default Receta
