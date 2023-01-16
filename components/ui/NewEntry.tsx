import React, { ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/PlaylistAddOutlined';
import { useContext } from 'react';
import { EntriesContext, UIContext } from '../../context';

export const NewEntry = () => {
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);
    const { addNewEntry } = useContext(EntriesContext);
    const { setAddingEntry, isAdding } = useContext(UIContext);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSave = () => {
        if (inputValue.length <= 0) {
            setTouched(true);
            return;
        }
        addNewEntry(inputValue);
        setTouched(false);
        setInputValue('');
        setAddingEntry(false);
    }

    const onCancel = () => {
        setTouched(false);
        setInputValue('');
        setAddingEntry(false);
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                !isAdding
                    ? (<Button
                        startIcon={<AddIcon />}
                        fullWidth
                        variant='outlined'
                        onClick={() => setAddingEntry(true)}
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
                            error={inputValue.length <= 0 && touched}
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='outlined'
                                onClick={onCancel}
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
