import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
    entries: Entry[];
    //? Metodos
    addNewEntry: (description: string) => void;
    updatedEntry: ({ _id, description, status }: Entry, showSnackBar?: boolean) => Promise<void>;
    deletedEntry: (entry: Entry) => Promise<void>;
}


export const EntriesContext = createContext({} as ContextProps );