import { createContext } from 'react';

interface ContextProps {
    sidemenuopen: boolean;
    isAdding: boolean;
    //* Metodos
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setAddingEntry: (value: boolean) => void;
    
}

export const UIContext = createContext({} as ContextProps);