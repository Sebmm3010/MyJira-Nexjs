import { createContext } from 'react';

interface ContextProps {
    sidemenuopen: boolean;
    isAdding: boolean;
    isDragging:boolean;
    //* Metodos
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setAddingEntry: (value: boolean) => void;
    setDraggingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);