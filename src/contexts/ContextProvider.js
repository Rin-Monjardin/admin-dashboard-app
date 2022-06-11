import React , { createContext , useContext , useState } from 'react';

const StateContext = createContext();

const initialState = { 
    chat: false , 
    cart: false ,
    useProfile: false , 
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        // only the true in the object will be in isClicked
        setIsClicked({ ...initialState  , [clicked]: true }) 
    }
    const [screenSize, setScreenSize] = useState(undefined);
    return ( 
        <StateContext.Provider 
        value={{ 
            activeMenu , 
            setactiveMenu,
            isClicked,
            setIsClicked,
            handleClick , 
            screenSize,
            setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    ) 
}

export const useStateContext = () => useContext(StateContext);