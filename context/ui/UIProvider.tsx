import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuopen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuopen: false
}

interface Props {
    children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    return (
        <UIContext.Provider value={{ sidemenuopen: false }}>
            {children}
        </UIContext.Provider>
    )
}