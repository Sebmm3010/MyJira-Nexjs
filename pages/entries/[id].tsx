import { ChangeEvent, useState } from 'react';

import { capitalize, Grid, Button, Card, CardActions, CardContent, CardHeader, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, IconButton } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from "../../components/layouts";
import { EntryStatus } from '../../interfaces/entry';
import { useForm } from '../../hooks';

const radioVariants: EntryStatus[] = ['pendiente', 'en-progreso', 'completado'];

const EntriePage = () => {

    const { inputValue, touched, setTouched, setInputValue, onInputChange } = useForm();

    const [status, setStatus] = useState<EntryStatus>('pendiente');

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
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
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada hace minutos`}
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
                                onChange={onInputChange}
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