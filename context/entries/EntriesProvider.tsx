import { FC, useReducer, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface Props {
    children: ReactNode
}


export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: '',
            description,
            createdAt: Date.now(),
            status: 'pendiente'
        }

        dispatch({ type: '[Entries] Add-Entry', payload: newEntry })
    }

    const updatedEntry = (entry: Entry) => {
        dispatch({ type: '[Entries] Entry-Updated', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updatedEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
};