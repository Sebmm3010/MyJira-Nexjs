import { capitalize, Grid, Button, Card, CardActions, CardContent, CardHeader, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layout } from "../../components/layouts";
import { EntryStatus } from '../../interfaces/entry';

const radioVariants: EntryStatus[] = ['pendiente', 'en-progreso', 'completado'];

const EntriePage = () => {
    return (
        <Layout title={'MyJira | Editar'}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title="Entrada: "
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
                            />

                            <FormControl>
                                <FormLabel>
                                    Estado:
                                </FormLabel>

                                <RadioGroup
                                    row
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