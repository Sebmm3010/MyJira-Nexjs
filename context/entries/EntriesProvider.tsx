import { FC, useReducer, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Ullamco excepteur cupidatat sint duis proident aliqua aliqua.',
            status: 'pendiente',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En Progreso: Exercitation aliquip incididunt amet mollit enim ad commodo deserunt ea consectetur.',
            status: 'en-progreso',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Completado: Aute adipisicing culpa ullamco culpa excepteur duis sit non.',
            status: 'completado',
            createdAt: Date.now()
        },
    ],
}

interface Props {
    children: ReactNode
}


export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
};