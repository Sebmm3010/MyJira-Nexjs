import { FC, useReducer, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';
import entriesApi from '../../apis/entriesApi';

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

    const addNewEntry = async (description: string) => {
        // const newEntry: Entry = {
        //     _id: '',
        //     description,
        //     createdAt: Date.now(),
        //     status: 'pendiente'
        // }

        const { data } = await entriesApi.post<Entry>('/entries', { description })

        dispatch({ type: '[Entries] Add-Entry', payload: data });
    }

    const updatedEntry = (entry: Entry) => {
        dispatch({ type: '[Entries] Entry-Updated', payload: entry })
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entries] Initial-Data', payload: data });
    }

    useEffect(() => {
        refreshEntries()
    }, []);


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