import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material"
import { EntryStatus } from "../../interfaces";
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entrisByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop=( event:DragEvent<HTMLDivElement> )=>{
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id=event.dataTransfer.getData('text');
        console.log({id});
    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', '&::-webkit-scrollbar': { display: 'none' }, padding: '1px 8px' }}>
                <List sx={{ opacity: 1 }}>
                    {entrisByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
