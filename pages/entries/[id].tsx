import { ChangeEvent, FC, useMemo, useState, useContext } from 'react';

import { GetServerSideProps } from 'next';

import { capitalize, Grid, Button, Card, CardActions, CardContent, CardHeader, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, IconButton } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { dbEntries } from '../../database';
import { Layout } from "../../components/layouts";
import { Entry, EntryStatus } from '../../interfaces';
import { useForm } from '../../hooks';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';


const radioVariants: EntryStatus[] = ['pendiente', 'en-progreso', 'completado'];

interface Props {
    entry:Entry
}


const EntriePage: FC<Props> = ({entry}) => {

    console.log({ entry });

    const { inputValue, touched, setTouched, setInputValue, onInputChange } = useForm(entry.description);

    const [status, setStatus] = useState<EntryStatus>(entry.status);

    const validation = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);
    
    const { updatedEntry } = useContext( EntriesContext );

    const router=useRouter();

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }

    const onSave = () => {
        if (inputValue.trim().length <= 0) return;

        const entryForUpdate:Entry={
            ...entry,
            status,
            description: inputValue
        }
        updatedEntry(entryForUpdate, true);
        router.push('/');

    }
    return (
        <Layout title={'MyJira | Editar'}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${entry.description.substring(0,30)}...`}
                            subheader={`Creada ${dateFunctions.calcTimeFromNow(entry.createdAt)}.`}
                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada"
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onInputChange}
                                error={validation}
                                helperText={validation && 'Ingrese un valor'}
                            />

                            <FormControl>
                                <FormLabel>
                                    Estado:
                                </FormLabel>

                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {
                                        radioVariants.map(opt => (
                                            <FormControlLabel
                                                key={opt}
                                                value={opt}
                                                control={<Radio />}
                                                label={capitalize(opt)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={<SaveOutlinedIcon />}
                                variant="contained"
                                fullWidth
                                disabled={inputValue.length <= 0}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'error.main'
            }}
            >
                <DeleteOutlinedIcon />
            </IconButton>
        </Layout>
    )
}

export default EntriePage

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const entry=await dbEntries.getEntryById(id);

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent:false
            }
        }
    }

    return {
        props: {
            id,
            entry
        }
    }
}