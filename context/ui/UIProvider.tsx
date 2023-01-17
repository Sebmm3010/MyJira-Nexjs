import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuopen: boolean;
    isAdding: boolean;
    isDragging: boolean; 
}

const UI_INITIAL_STATE: UIState = {
    sidemenuopen: false,
    isAdding: false,
    isDragging:false
}

interface Props {
    children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI-Open Sidebar' });
    }
    const closeSideMenu = () => {
        dispatch({ type: 'UI-Close Sidebar' });
    }
    const setAddingEntry = (value: boolean) => {
        dispatch({ type: '[Entries] SetAddingEntry', payload: value })
    }
    const setDraggingEntry = (value: boolean) => {
        dispatch({ type: 'UI-SetDragging', payload: value })
    }

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu,
            setAddingEntry,
            setDraggingEntry
        }}>
            {children}
        </UIContext.Provider>
    )
}