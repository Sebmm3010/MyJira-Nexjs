import { createContext } from 'react';

interface ContextProps {
    sidemenuopen: boolean;
}

export const UIContext = createContext({} as ContextProps);