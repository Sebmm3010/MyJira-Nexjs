import React, { ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/PlaylistAddOutlined';

export const NewEntry = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSave = () => {
        if (inputValue.length <= 0) return;

        console.log(inputValue);
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                !isAdding
                    ? (<Button
                        startIcon={<AddIcon />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAdding(true)}
                    >
                        Agregar nueva tarea
                    </Button>)
                    : (<>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='+ Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            value={inputValue}
                            onChange={onInputChange}
                            onBlur={() => setTouched(true)}
                            error={inputValue.length <= 0 && touched}
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='outlined'
                                onClick={() => setIsAdding(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                onClick={onSave}
                                color='secondary'
                                endIcon={<SaveOutlinedIcon />}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>)
            }


        </Box>
    )
}
