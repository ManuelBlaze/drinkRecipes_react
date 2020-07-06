import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		position: "absolute",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
		[theme.breakpoints.up("sm")]: {
			width: 450,
		},
		maxHeight: 500,
		overflowY: "auto",
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
    const { recetaMod, setIdreceta, setRecetaMod } = useContext(ModalContext);

    //Mostrar y formatear ingredientes
    const mostrarIngredientes = recetaMod => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (recetaMod[`strIngredient${i}`]) {
                ingredientes.push(
					<li>
						{recetaMod[`strIngredient${i}`]}{" "}
						{recetaMod[`strMeasure${i}`]}
					</li>
				);   
            }
        }
        return ingredientes;
    }

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
                        className={classes.modal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 1000,
                        }}
                        onClose={() => {
                            setIdreceta(null);
                            setRecetaMod({});
                            handleClose();
                        }}
                    > 
                    <Fade in={open}>

                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recetaMod.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {recetaMod.strInstructions}
                            </p>

                            <img src={recetaMod.strDrinkThumb} alt="" className="img-fluid my-4"/>

                            <h3>Ingredients</h3>
                            <ul>
                                {   mostrarIngredientes(recetaMod) }
                            </ul>
                        </div>
                    </Fade>
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
