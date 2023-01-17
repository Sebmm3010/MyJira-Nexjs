import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material"
import { EntryStatus } from "../../interfaces";
import { EntryCard } from './';
import { EntriesContext, UIContext } from '../../context';
import style from "./EntryList.module.css";

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updatedEntry } = useContext(EntriesContext);
    const { isDragging, setDraggingEntry } = useContext(UIContext);


    const entrisByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');

        const entry = entries.find(e => e._id === id)!;
        entry.status=status;
        updatedEntry(entry);
        setDraggingEntry(false);

    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? style.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', '&::-webkit-scrollbar': { display: 'none' }, padding: '1px 8px' }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {entrisByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
