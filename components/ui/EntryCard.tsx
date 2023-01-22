import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { Entry } from "../../interfaces"
import { UIContext } from '../../context/ui/UIContext';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setDraggingEntry } = useContext(UIContext);

    const router= useRouter()

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id);

        setDraggingEntry(true);
    }

    const onDragEnd = () => {
        setDraggingEntry(false);
    }

    const handleNavigate=()=>{
        router.push(`/entries/${entry._id}`);
    }
    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onClick={handleNavigate}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {entry.description}
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant="body2">{dateFunctions.calcTimeFromNow(entry.createdAt)}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
