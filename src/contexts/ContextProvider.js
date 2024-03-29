import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClicked = (clicked) => {
        setIsClicked({...initialState, [clicked] : true})
    }

    const[screenSize, setScreenSize] = useState(undefined);

    return ( 
        <StateContext.Provider
            value = {{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClicked, screenSize,
                setScreenSize
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);