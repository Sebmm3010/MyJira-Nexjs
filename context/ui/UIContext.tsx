import { createContext } from 'react';

interface ContextProps {
    isAdding: boolean;
    isDragging:boolean;
    //* Metodos
    setAddingEntry: (value: boolean) => void;
    setDraggingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);