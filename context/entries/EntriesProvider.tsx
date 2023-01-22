import { FC, useReducer, ReactNode, useEffect } from 'react';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';
import entriesApi from '../../apis/entriesApi';
import { useSnackbar } from 'notistack';

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
    const { enqueueSnackbar } = useSnackbar();

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

    const updatedEntry = async ({ _id, description, status }: Entry, showSnackBar=false) => {
        try {

            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });

            dispatch({ type: '[Entries] Entry-Updated', payload: data });

            if(showSnackBar){
                enqueueSnackbar('Entrada actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            }
        } catch (error) {
            console.log({ error });

            enqueueSnackbar('No fue posible actualizar', {
                variant: 'error',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

        }
    }
    const deletedEntry= async(entry:Entry)=>{
        try {
            const {data}= await entriesApi.delete<Entry>(`/entries/${entry._id}`);
            dispatch({type:'[Entries] Entry-Deleted', payload:data});
        } catch (error) {
            console.log({ error });
        }
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
            updatedEntry,
            deletedEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
};