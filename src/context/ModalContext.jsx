import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

//crear Cntext
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del provider
    const [idreceta, setIdreceta] = useState(null);

    return ( 
        <ModalContext.Provider
            value={{
                setIdreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;